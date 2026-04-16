import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from './data/questions';
import { characters } from './data/characters';
import { DimensionProfile, Option, Character } from './types';
import { ChevronRight, RefreshCcw } from 'lucide-react';

type AppState = 'start' | 'quiz' | 'calculating' | 'result';

export default function App() {
  const [appState, setAppState] = useState<AppState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [userProfile, setUserProfile] = useState<DimensionProfile>({
    DOM: 0, TRA: 0, LOY: 0, VIT: 0, MOR: 0, AFF: 0
  });
  const [matchedCharacterId, setMatchedCharacterId] = useState<string | null>(null);

  const handleStart = () => {
    setAppState('quiz');
    setCurrentQuestionIndex(0);
    setUserProfile({ DOM: 0, TRA: 0, LOY: 0, VIT: 0, MOR: 0, AFF: 0 });
    setSelectedOptions([]);
  };

  const handleOptionToggle = (option: Option) => {
    setSelectedOptions(prev => {
      const isSelected = prev.some(o => o.text === option.text);
      if (isSelected) {
        return prev.filter(o => o.text !== option.text);
      } else {
        if (prev.length < 3) {
          return [...prev, option];
        }
        return prev;
      }
    });
  };

  const handleNextQuestion = () => {
    // Accumulate scores
    const newProfile = { ...userProfile };
    selectedOptions.forEach(option => {
      (Object.keys(option.scores) as Array<keyof DimensionProfile>).forEach(key => {
        newProfile[key] += option.scores[key] || 0;
      });
    });
    setUserProfile(newProfile);
    setSelectedOptions([]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResult(newProfile);
    }
  };

  const calculateResult = (finalProfile: DimensionProfile) => {
    setAppState('calculating');
    
    // Normalize user profile and character profiles to find the closest match (Cosine Similarity)
    let bestMatchId = characters[0].id;
    let maxSimilarity = -Infinity;

    const getVectorMagnitude = (profile: DimensionProfile) => {
      return Math.sqrt(Object.values(profile).reduce((sum, val) => sum + val * val, 0));
    };

    const dotProduct = (p1: DimensionProfile, p2: DimensionProfile) => {
      return (
        p1.DOM * p2.DOM +
        p1.TRA * p2.TRA +
        p1.LOY * p2.LOY +
        p1.VIT * p2.VIT +
        p1.MOR * p2.MOR +
        p1.AFF * p2.AFF
      );
    };

    const userMag = getVectorMagnitude(finalProfile);

    characters.forEach(char => {
      const charMag = getVectorMagnitude(char.profile);
      const dot = dotProduct(finalProfile, char.profile);
      const similarity = userMag && charMag ? dot / (userMag * charMag) : 0;

      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        bestMatchId = char.id;
      }
    });

    setTimeout(() => {
      setMatchedCharacterId(bestMatchId);
      setAppState('result');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text font-sans selection:bg-editorial-accent selection:text-white">
      <AnimatePresence mode="wait">
        {appState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col items-center justify-center text-center space-y-12 px-6"
          >
            <div className="space-y-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-editorial-muted">Personal Mirror Profile</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-editorial-ink font-serif">
                淮上人物镜像测试
              </h1>
              <p className="text-editorial-muted text-lg max-w-xl mx-auto leading-relaxed font-serif italic">
                权力、创伤、忠诚、生命力、道德边界与情感表达。<br/>
                在深渊与烈日之间，你的灵魂底色最接近哪位经典角色？
              </p>
            </div>
            <button
              onClick={handleStart}
              className="group relative px-10 py-4 bg-transparent border border-editorial-border hover:border-editorial-accent transition-all duration-300 flex items-center space-x-4 overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-editorial-sidebar transition-all duration-[250ms] ease-out group-hover:w-full -z-10"></div>
              <span className="relative text-editorial-ink tracking-[0.2em] font-medium text-[11px] uppercase">开启灵魂镜像 / Start</span>
              <ChevronRight className="relative w-4 h-4 text-editorial-accent group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {appState === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="min-h-screen flex flex-col max-w-3xl mx-auto w-full py-16 px-6"
          >
            <div className="mb-16">
              <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-editorial-muted mb-4">
                <span>Question {currentQuestionIndex + 1}</span>
                <span>{currentQuestionIndex + 1} / {questions.length}</span>
              </div>
              <div className="h-[2px] w-full bg-editorial-border overflow-hidden">
                <motion.div
                  className="h-full bg-editorial-accent"
                  initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                  animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed font-serif text-editorial-ink">
                {questions[currentQuestionIndex].text}
              </h2>
              <p className="text-[11px] uppercase tracking-[0.1em] text-editorial-muted mb-6 border-l-2 border-editorial-accent pl-2">
                * 可多选，最多选择 3 项 / Select up to 3
              </p>
              <div className="space-y-4">
                {questions[currentQuestionIndex].options.map((option, idx) => {
                  const isSelected = selectedOptions.some(o => o.text === option.text);
                  const isDisabled = !isSelected && selectedOptions.length >= 3;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionToggle(option)}
                      disabled={isDisabled}
                      className={`w-full text-left p-6 border transition-all duration-200 ${
                        isSelected 
                          ? 'bg-editorial-sidebar border-editorial-accent text-editorial-ink' 
                          : isDisabled
                            ? 'bg-transparent border-editorial-border/50 text-editorial-muted/50 cursor-not-allowed'
                            : 'bg-transparent border-editorial-border hover:border-editorial-accent text-editorial-text hover:bg-editorial-sidebar/50'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`mt-1 w-3 h-3 border flex-shrink-0 flex items-center justify-center transition-colors ${
                          isSelected ? 'border-editorial-accent bg-editorial-accent' : 'border-editorial-border'
                        }`}>
                        </div>
                        <span className="leading-relaxed text-[15px]">{option.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-16 flex justify-end">
              <button
                onClick={handleNextQuestion}
                disabled={selectedOptions.length === 0}
                className={`px-8 py-4 flex items-center space-x-3 transition-all duration-300 border ${
                  selectedOptions.length > 0
                    ? 'border-editorial-accent bg-editorial-accent text-white hover:bg-editorial-ink'
                    : 'border-editorial-border bg-transparent text-editorial-muted cursor-not-allowed'
                }`}
              >
                <span className="tracking-[0.2em] text-[11px] uppercase">下一步 / Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {appState === 'calculating' && (
          <motion.div
            key="calculating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center space-y-8"
          >
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 border-t-2 border-editorial-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border-r-2 border-editorial-muted rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="text-editorial-muted tracking-[0.3em] font-serif italic text-sm animate-pulse">
              Analyzing soul dimensions...
            </p>
          </motion.div>
        )}

        {appState === 'result' && matchedCharacterId && (
          <ResultScreen 
            character={characters.find(c => c.id === matchedCharacterId)!}
            onRetake={handleStart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultScreen({ character, onRetake }: { character: Character, onRetake: () => void }) {
  const dimensions = [
    { key: 'DOM', label: '权力与掌控' },
    { key: 'TRA', label: '创伤应激' },
    { key: 'LOY', label: '忠诚底色' },
    { key: 'VIT', label: '生命张力' },
    { key: 'MOR', label: '道德边界' },
    { key: 'AFF', label: '情感表达' },
  ];

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full flex flex-col md:grid md:grid-cols-[360px_1fr] bg-editorial-bg text-editorial-text font-sans"
    >
      <aside className="border-r border-editorial-border p-10 flex flex-col justify-between bg-editorial-sidebar">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-editorial-muted">Personal Mirror Profile / {character.id.substring(0, 3).toUpperCase()}</div>
          <div className="mt-5">
            <h1 className="font-serif text-[84px] leading-none font-bold mb-1 text-editorial-ink">{character.name}</h1>
            <span className="text-[14px] tracking-[0.3em] uppercase text-editorial-muted border-b-2 border-editorial-accent pb-1 inline-block">
              {character.novel}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            {dimensions.map((dim) => {
              const score = character.profile[dim.key as keyof DimensionProfile];
              return (
                <div key={dim.key} className="border border-editorial-border p-4">
                  <span className="text-[10px] uppercase text-editorial-muted block mb-1">{dim.label}</span>
                  <span className="font-serif italic text-base">{score} / 10</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-10">
          <button
            onClick={onRetake}
            className="group flex items-center space-x-3 text-editorial-muted hover:text-editorial-accent transition-colors"
          >
            <RefreshCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
            <span className="tracking-[0.2em] text-[10px] uppercase">Retake Test</span>
          </button>
        </div>
      </aside>

      <main className="p-10 md:py-16 md:px-20 flex flex-col h-full overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-editorial-border pb-4 gap-4">
          <div className="text-[12px] text-editorial-muted">
            <strong>Quote:</strong> <span className="font-serif italic text-editorial-text">"{character.quote}"</span>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="font-serif text-[13px] uppercase tracking-[0.1em] mb-5 text-editorial-accent border-l-[3px] border-editorial-accent pl-2.5">
            人物生平简介 / Profile
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#333] text-justify">
            {character.bio}
          </p>
        </section>

        <section className="flex-grow">
          <h2 className="font-serif text-[13px] uppercase tracking-[0.1em] mb-5 text-editorial-accent border-l-[3px] border-editorial-accent pl-2.5">
            深度性格解析 / Analysis
          </h2>
          <div className="text-[14px] leading-[1.7] text-[#444] md:columns-2 md:gap-10 text-justify">
            {character.analysis.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 break-inside-avoid">{paragraph}</p>
            ))}
          </div>
        </section>

        <footer className="mt-10 flex justify-between items-end">
          <div className="text-[10px] text-editorial-muted max-w-[200px]">
            淮上作品角色镜像测试系统 - 维度数据由神经网络算法支持。仅供娱乐，严禁商用。
          </div>
          <div className="w-[60px] h-[60px] border border-editorial-border flex items-center justify-center text-[8px] text-center text-editorial-muted">
            MIRROR<br/>TEST
          </div>
        </footer>
      </main>
    </motion.div>
  );
}
