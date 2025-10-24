
import React, { useState, useEffect } from 'react';
import { Search, Calculator, BookOpen, BarChart3, Zap } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface CommandBarProps {
  onModeChange: (mode: 'solve' | 'learn' | 'graph') => void;
  onDomainSelect: (domain: string) => void;
}

const CommandBar: React.FC<CommandBarProps> = ({ onModeChange, onDomainSelect }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const commands = [
    {
      group: "Navigation",
      items: [
        { name: "Solve Mode", icon: Calculator, action: () => onModeChange('solve') },
        { name: "Learn Mode", icon: BookOpen, action: () => onModeChange('learn') },
        { name: "Graph Mode", icon: BarChart3, action: () => onModeChange('graph') },
      ]
    },
    {
      group: "Math Domains",
      items: [
        { name: "Algebra", icon: Zap, action: () => onDomainSelect('algebra') },
        { name: "Calculus", icon: Zap, action: () => onDomainSelect('calculus') },
        { name: "Geometry", icon: Zap, action: () => onDomainSelect('geometry') },
        { name: "Statistics", icon: Zap, action: () => onDomainSelect('statistics') },
      ]
    }
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-300 hover:bg-blue-500/30 transition-all duration-300 animate-glow-pulse"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Quick Search</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {commands.map((group) => (
            <CommandGroup key={group.group} heading={group.group}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.name}
                  onSelect={() => {
                    item.action();
                    setOpen(false);
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandBar;
