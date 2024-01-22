export default function Icon({
    name,
    size=24,
    ...props
}) {
    return (
        <svg width={size} height={size} {...props}>
            <use href={`/sprite.svg#${name}`} />
        </svg>       
    )
}