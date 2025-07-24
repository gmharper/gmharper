
function BoxLabel ({ children, text='', text_colour='text-black', colour='bg-stone-100', width='30', margin_right='mr-0', setFn }) {
    return (
        <div className={'flex flex-row min-h-10 scale-100 content-center items-center rounded-xs px-3 ' +colour +' '+width +' '+margin_right}
            onMouseEnter={() => { if (setFn) setFn(true)}}
            onMouseLeave={() => { if (setFn) setFn(false)}}
        >
            <p className={'text-lg text-left font-bold ' +text_colour}>{text}</p>
            <div className='flex-1' />
            { children ? children : <></> }
        </div>
    )
}

export default BoxLabel