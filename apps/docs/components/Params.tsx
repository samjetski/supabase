type IParamProps = any

const Param = ({ name, isOptional, type, description, children }: IParamProps) => {
  return (
    <div className="border-t border-b py-5 flex flex-col gap-3 debugger">
      <div className="flex gap-3 items-center">
        <span className="text-sm text-scale-1200 font-mono font-medium">{name ?? 'no-name'}</span>
        <span>
          {isOptional ? (
            <div className="text-[10px] px-3 tracking-wide font-mono text-scale-900">Optional</div>
          ) : (
            <div className="text-[10px] border border-amber-700 bg-amber-300 text-amber-900 px-2 tracking-wide font-mono py-0.25 rounded-full">
              REQUIRED
            </div>
          )}
        </span>
        <span className="text-scale-900 text-xs">{type ?? 'no type'}</span>
      </div>
      {description && <p className="text-sm text-scale-1000 m-0">{description} </p>}
      {children}
    </div>
  )
}

export default Param
