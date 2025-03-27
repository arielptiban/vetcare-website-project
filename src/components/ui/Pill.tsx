interface PillProps {
    text: string
}

export default function Pill(props: PillProps) {
    const { text } = props
    return (
        <>
            <span className="inline-block text-sm font-semibold bg-sage/30 text-teal px-4 py-1 rounded-full mb-4" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                {text}
            </span>
        </>
    )
}
