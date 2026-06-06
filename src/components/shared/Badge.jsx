/**
 * Badge – small coloured label (e.g. BUSINESS ACCOUNT on user cards)
 * type: default | success | warning | danger
 */

function Badge({ text, type = 'default' }) {
    const className = 'badge badge-' + type;
  
    return <span className={className}>{text}</span>;
  }
  
  export default Badge;