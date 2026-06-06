export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  block = false,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline-emerald',
    ghost: 'btn-ghost',
  }

  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
  }

  const iconClass =
    iconPosition === 'left' ? 'btn-icon-left' : 'btn-icon'

  return (
    <Component
      className={`${variants[variant]} ${sizes[size]} ${block ? 'btn-block' : ''} ${className}`.trim()}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={iconClass} size={size === 'sm' ? 16 : 18} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={iconClass} size={size === 'sm' ? 16 : 18} />
      )}
    </Component>
  )
}
