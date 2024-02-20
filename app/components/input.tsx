
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
};
const Input = ({
    className = '',
    id,
    name,
    label,
    type,
    ...props
}: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={id} id={id} className={`border border-gray-400 p-2 ${className}`} {...props} />
        </div>
    )
}
export default Input;