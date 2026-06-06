export default function IconBox({
  icon: Icon,
  size = 'md',
  className = '',
  circle = false,
}) {
  if (circle) {
    return (
      <div className={`icon-circle icon-circle-sm ${className}`.trim()}>
        <Icon className="h-5 w-5" />
      </div>
    )
  }

  const sizes = {
    sm: 'icon-box-sm',
    md: 'icon-box-md',
    lg: 'icon-box-lg',
  }

  return (
    <div className={`icon-box ${sizes[size]} ${className}`.trim()}>
      <Icon className="h-5 w-5" />
    </div>
  )
}
