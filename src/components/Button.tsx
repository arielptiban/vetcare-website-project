
interface ButtonProps {
    text: string
    type: string
}

export default function Button(props: ButtonProps) {
    const { text, type } = props
    return (
        <>
            <a href=""
                className={`${type === 'primary' ?
                    'bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1'
                    :
                    'bg-secondary text-foreground hover:bg-secondary/90 px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1'}`} >
                {text}
            </a >
        </>
    )
}
