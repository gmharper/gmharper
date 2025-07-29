import { Tooltip as ReactTooltip } from "react-tooltip"
import { Link } from "react-router"

const tooltip_style = {
    backgroundColor: 'white',
    color: 'black',
    font: 'bold'
}

const icon_style = 'flex w-14 h-14 bg-radial from-zinc-800 to-zinc-900 outline-1 outline-zinc-800 rounded-full p-1 hover:shadow-md shadow-white items-center justify-center'

function IconsPanel ({ icons_1, icons_2 }) {
    return (
        <div className='flex flex-row gap-1'>
            <div className='flex flex-col h-full gap-1' >
                { icons_1.map((icon, index) => {
                    return (
                        <>
                            { icon.id==='spacer' ? <div className='flex-1'/> :
                            <div id={icon.id} data-tooltip-id={icon.id} className={icon_style}>
                                { icon.component ? icon.component : <></> }
                            </div>
                            }
                            <ReactTooltip
                                style={tooltip_style}
                                opacity={100}
                                className='z-100 font-bold' 
                                id={icon.id}
                                content={icon.name}
                                place={'right'}
                            />
                        </>
                    )
                })}
            </div>

            <div className='flex flex-col h-full gap-1'>
                { icons_2.map((icon, index) => {
                    return (
                        <>
                            { icon.id==='spacer' ? <div className='flex-1'/> :
                            <div id={icon.id} data-tooltip-id={icon.id} className={icon_style}>
                                { icon.component }
                            </div>
                            }
                            <ReactTooltip
                                style={tooltip_style}
                                className='z-100 font-bold' 
                                id={icon.id}
                                content={icon.name}
                                place={'right'}
                            /> 
                        </> 
                    )
                })}
            </div>
        </div>
    )
}

export default IconsPanel