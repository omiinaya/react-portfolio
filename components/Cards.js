import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Image from 'next/image'
import AvatarImage from "../public/static/imgs/avatar.png"
import ReactImage from "../public/static/imgs/icons/React.png"

export default function Cards(props) {
    console.log(props.x['React'].default.src)

    return (
        <Box>
            {props.mobile ? (
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.cards.slice(0, props.cards.length / 2).map((card, index) => (
                            <Grow
                                in={props.visible}
                                key={card}
                                style={{
                                    //transformOrigin: '0 0 0',
                                    transform: `translateY(${(index + 0) * 30}px)`
                                }}
                                {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                            >
                                <Paper className="rootCardContainer">
                                    <Box className="rootCard">
                                        <Image
                                            alt={card}
                                            src={props.x[`${card}`].default.src}
                                            className='imageCard'
                                            width={250}
                                            height={250}
                                        />
                                        {card}
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        {props.cards.slice(props.cards.length / 2, props.cards.length).map((card, index) => (
                            <Grow
                                in={props.visible}
                                key={card}
                                style={{
                                    //transformOrigin: '0 0 0',
                                    transform: `translateY(${(index + 0) * 30}px)`
                                }}
                                {...(props.visible ? { timeout: (index + 4) * 500 } : {})}
                            >
                                <Paper className="rootCardContainer">
                                    <Box className="rootCard">
                                        <Image
                                            alt={card}
                                            src={props.x[`${card}`].default.src}
                                            className='imageCard'
                                            width={250}
                                            height={250}
                                        />
                                        {card}
                                    </Box>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    {props.cards.map((card, index) => (
                        <Grow
                            in={props.visible}
                            key={card}
                            style={{
                                //transformOrigin: '0 0 0',
                                transform: `translateY(${(index + 0) * 30}px)`
                            }}
                            {...(props.visible ? { timeout: (index + 1) * 500 } : {})}
                        >
                            <Paper className="rootCardContainer">
                                <Box className="rootCard">
                                    <Image
                                        alt={card}
                                        src={props.x[`${card}`].default.src}
                                        className='imageCard'
                                        width={70}
                                        height={70}
                                    />
                                    <div>
                                        {card}
                                    </div>
                                </Box>
                            </Paper>
                        </Grow>
                    ))}
                </Box>
            )}
        </Box>
    )
}