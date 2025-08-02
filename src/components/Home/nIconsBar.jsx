"use-client"

// IMPORTS
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import App, { AppContext } from '../../App.jsx'

import { 
    JavascriptIcon, TypescriptIcon, DotEnvIcon, PythonIcon,
    ReactIcon, ReactRouterIcon, ReactQueryIcon, JqueryIcon,
    ExpoIcon, ExpressJsIcon, NodejsIcon, ViteJsIcon, NextJsIcon, NpmIcon, MotionJsIcon,
    FirebaseIcon, MongodbIcon, PostgresqlIcon, MySqlIcon, SupabaseIcon,
    GitIcon, GithubIcon,
    Html5Icon, Css3Icon, TailwindCssIcon, MarkdownIcon,
    BlenderIcon,
    GodotIcon,
    AxiosIcon,
    UbuntuIcon
} from "../../assets/icons.jsx"

// STYLING
const tooltip_style = { 
    position: 'absolute',
    zIndex: '40',
    backgroundColor: "rgb(0, 255, 30)", 
    color: "#222", 
    borderRadius: '2px' }

const icon_styling = 'min-w-20 w-28 min-h-20 h-24 hover:scale-110 drop-shadow-sm drop-shadow-sky-500'
const parent_container = 'z-20 relative flex flex-row w-screen mb-4 bg-black/0 whitespace-nowrap'

const fade_container = 'z-20 w-screen h-28 bg-linear-to-l from-midnight/0 via-midnight/0 to-midnight/0 pointer-events-none'

const icons_array= [
    'ubuntu', 'javascript', 'typescript', 'python', 'dotenv', 'node', 'npm', 'break',
    'react', 'react_query', 'react_router', 'break2',
    'expo', 'express', 'vite', 'next', 'motion', 'break3',
    'postgres', 'mysql', 'firebase', 'mongodb', 'supabase', 'break4',
    'git', 'github', 'break5',
    'html', 'css', 'tailwind', 'break6',
    'blender', 'breakend'
]

const icons_list = {
    'ubuntu':       { id: 'ubuntu',         name: 'UBUNTU',                 component: <UbuntuIcon className={icon_styling} />          },
    'javascript':   { id: 'javascript',     name: 'JAVASCRIPT',             component: <JavascriptIcon className={icon_styling}/>       },
    'typescript':   { id: 'typescript',     name: 'TYPESCRIPT',             component: <TypescriptIcon className={icon_styling}/>       },
    'python':       { id: 'python',         name: 'PYTHON',                 component: <PythonIcon className={icon_styling}/>           },
    'dotenv':       { id: 'dotenv',         name: 'DOTENV',                 component: <DotEnvIcon className={icon_styling}/>           },
    'node':         { id: 'node',           name: 'NODE JS',                component: <NodejsIcon className={icon_styling}/>           },
    'npm':          { id: 'npm',            name: 'NPM',                    component: <NpmIcon className={icon_styling}/>              },
    'break':        { id: 'break'},

    'react':        { id: 'react',          name: 'REACT/NATIVE',           component: <ReactIcon className={icon_styling}/>            },
    'react_query':  { id: 'react_query',    name: 'REACT QUERY',            component: <ReactQueryIcon className={icon_styling}/>       },
    'react_router': { id: 'react_router',   name: 'REACT ROUTER',           component: <ReactRouterIcon className={icon_styling}/>      },
    'jQuery':       { id: 'jQuery',        name: 'jQuery',                 component: <JqueryIcon className={icon_styling}/>            },
    'axios':        { id: 'axios',          name: 'AXIOS',                  component: <AxiosIcon className={icon_styling}/>            },
    'break2':       { id: 'break2'},

    'expo':         { id: 'expo',           name: 'EXPO/EXPO GO',           component: <ExpoIcon className={icon_styling}/>             },
    'express':      { id: 'express',        name: 'EXPRESS JS',             component: <ExpressJsIcon className={icon_styling}/>        },
    'vite':         { id: 'vite',           name: 'VITE JS',                component: <ViteJsIcon className={icon_styling}/>           },
    'next':         { id: 'next',           name: 'NEXT JS',                component: <NextJsIcon className={icon_styling}/>           },
    'motion':       { id: 'motion',         name: 'MOTION JS',              component: <MotionJsIcon className={icon_styling}/>         },
    'break3':       { id: 'break4'},

    'postgres':     { id: 'postgres',       name: 'PostgreSQL',             component: <PostgresqlIcon className={icon_styling}/>       },
    'mysql':        { id: 'mysql',          name: 'MySQL',                  component: <MySqlIcon className={icon_styling}/>            },
    'firebase':     { id: 'firebase',       name: 'FIREBASE',               component: <FirebaseIcon className={icon_styling}/>         },
    'mongodb':      { id: 'mongodb',        name: 'MONGO DB',               component: <MongodbIcon className={icon_styling}/>          },
    'supabase':     { id: 'supabase',       name: 'SUPABASE',               component: <SupabaseIcon  className={icon_styling} />       },
    'break4':       { id: 'break5'},

    'git':          { id: 'git',            name: 'GIT',                    component: <GitIcon className={icon_styling}/>              },
    'github':       { id: 'github',         name: 'GITHUB',                 component: <GithubIcon className={icon_styling}/>           },
    'break5':       { id: 'break6',                                         component: <div className='w-16' />                         },

    'html':         { id: 'html',           name: 'HTML',                   component: <Html5Icon className={icon_styling}/>            },
    'css':          { id: 'css',            name: 'CSS',                    component: <Css3Icon className={icon_styling}/>             },
    'tailwind':     { id: 'tailwind',       name: 'TAILWIND CSS',           component: <TailwindCssIcon className={icon_styling}/>      },
    'break6':       { id: 'break7'},

    'blender':      { id: 'blender',        name: 'BLENDER',                component: <BlenderIcon className={icon_styling}/>          },
    'godot':        { id: 'godot',          name: 'GODOT',                  component: <GodotIcon className={icon_styling}/>            },
    'breakend':     { id: 'breakend' }
}

function NIconsBar ({ activeElement, setActiveElement }) {
    const { playAnimations } = useContext(AppContext)

    let scroll_container = 'absolute flex flex-row w-fit ' + (playAnimations && 'animate-scrolling ')
    let scroll_container_2 = scroll_container+' translate-x-full delay-45'

    const [mousePos, setMousePos] = useState({ x: 0, y: 0})
    const [timer, setTimer] = useState(0)
    const [mouseOver, setMouseOver] = useState(false)

    // if icon position = getWindowSize/2 then setActiveElement

    let getId = document.elementsFromPoint(window.innerWidth/2, 200)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(timer+1);
        }, 200);

        getId = document.elementsFromPoint(window.innerWidth/2, 170)

        if (getId && getId[1].id && !mouseOver) setActiveElement({...icons_list[getId[1].id]})

        return () => clearInterval(intervalId);

    }, [timer])


    return (
        <div className='w-screen h-24 overflow-hidden shadow-lg items-center justify-center'>
            <div className={parent_container}>
                
                <div className={scroll_container}>
                    { icons_array.map((icon) => { return ( 
                    (icons_list[icon].id ? (icons_list[icon].id.includes('break') ? 
                        <div id={icons_list[icon].id} key={icons_list[icon].id} className='w-16' /> :
                        <div id={icons_list[icon].id} key={icons_list[icon].id} className='w-full h-full'
                            onMouseEnter={(e) => {
                                setActiveElement({...icons_list[icon], id:icons_list[icon].id+'_1'} )
                                setMouseOver(true)
                            } }
                                
                            onMouseLeave={(e) => { 
                                setActiveElement(null)
                                setMouseOver(false)
                            }}
                        >
                            {icons_list[icon].component}
                        </div>) : <></>)
                    ) }) } 
                </div>

                <div className={scroll_container_2}>
                    { icons_array.map((icon) => { return ( 
                    icons_list[icon].id ? icons_list[icon].id.includes('break') ? 
                        <div id={icons_list[icon].id} key={icons_list[icon].id} className='w-16' /> :
                        <div id={icons_list[icon].id} key={icons_list[icon].id} className='w-full h-full'
                            onMouseEnter={(e) => {
                                setActiveElement({...icons_list[icon], id:icons_list[icon].id+'_2'} )
                                setMouseOver(true)
                            } }
                                
                            onMouseLeave={(e) => { 
                                setActiveElement(null)
                                setMouseOver(false)
                            }}
                        >
                            {icons_list[icon].component}
                        </div> : <></>
                    ) }) } 
                </div>

                <div className={fade_container} />
            </div>
        </div>
    )
}

export default NIconsBar
