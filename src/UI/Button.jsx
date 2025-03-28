import { Link } from 'react-router-dom';

function Button({
  children,
  disabled,
  to,
  type,
  onClick,
}) {
  const base = `'inline-block text-sm rounded-full bg-yellow-500 
        font-semibold uppercase tracking-wide
      text-stone-800 transition-colors duration-300
       hover:bg-yellow-300 
       focus:outline-none focus:ring focus:ring-yellow-300 
       focus:ring-offset-2 focus:bg-yellow-300
       disabled:cursor-not-allowed '`;
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small:
      base +
      'px-2 py-1.5 md:px-5 md:py-2.5 text-xs',
    round:
      base +
      'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary: `inline-block text-sm rounded-full border-2 border-stone-400 
        font-semibold uppercase tracking-wide
      text-stone-400 transition-colors duration-300
       hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800
       focus:outline-none focus:ring focus:ring-stone-500 
       focus:ring-offset-2 focus:bg-stone-300
       disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5`,
    delete:
      `'inline-block text-sm rounded-full bg-red-700 
        font-semibold uppercase tracking-wide
      text-stone-900 transition-colors duration-300
       hover:bg-red-300 
       focus:outline-none focus:ring focus:ring-red-300 
       focus:ring-offset-2 focus:bg-red-300
       disabled:cursor-not-allowed '` +
      'px-2 py-1.5 md:px-5 md:py-2.5 text-xs',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
