"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isEnglish = pathname.startsWith('/en');
  const isSpanish = pathname.startsWith('/es');
  
  const switchToEnglish = () => {
    if (isSpanish) {
      router.push(pathname.replace('/es', '/en'));
    } else {
      router.push('/en');
    }
  };
  
  const switchToSpanish = () => {
    if (isEnglish) {
      router.push(pathname.replace('/en', '/es'));
    } else {
      router.push('/es');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={switchToEnglish}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 ${
            isEnglish
              ? 'border border-border text-muted bg-transparent'
              : 'border border-transparent text-muted bg-transparent hover:text-foreground'
          }`}
      >
        EN
      </button>
      <button
        onClick={switchToSpanish}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 ${
            isSpanish
              ? 'border border-border text-muted bg-transparent'
              : 'border border-transparent text-muted bg-transparent hover:text-foreground'
          }`}
      >
        ES
      </button>
    </div>
  );
}