const Icon = ({ id, size = 24}) => {
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`}></use>
    </svg>
  )
}

export default Icon