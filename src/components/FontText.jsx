'use client';

export default function FontText({ 
  children, 
  className = '', 
  as: Component = 'span', 
  forceLanguage, // Optional: manually force a language
  ...props 
}) {
  // Determine which font to use
  let fontClass = '';
  
  if (forceLanguage === 'khmer') {
    fontClass = 'font-khmer';
  } else if (forceLanguage === 'english') {
    fontClass = 'font-english';
  } else {
    // Auto-detect based on text content
    const text = typeof children === 'string' ? children : '';
    const hasKhmer = /[\u1780-\u17FF]/.test(text);
    fontClass = hasKhmer ? 'font-khmer' : 'font-english';
  }
  
  return (
    <Component className={`${fontClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}