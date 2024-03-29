import { useState } from 'react';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Typography from '@mui/material/Typography';
import Certificate from './Certificate';
import Fade from '@mui/material/Fade';

export default function Certifications() {
    const [bottom, setBottom] = useState(false);
    const [v1, setV1] = useState(false);
    const [v2, setV2] = useState(false);
    const [v3, setV3] = useState(false);
    const [v4, setV4] = useState(false);
    const [v5, setV5] = useState(false);
    const [v6, setV6] = useState(false);
    const certs1 = ['FullStack']
    const certs2 = ['Comptiaa', 'Comptiaitf']
    const certs3 = ['MTAJS', 'MTAPython']
    const certs4 = ['React', 'JavaScript']
    const certs5 = ['HTML', 'CSS']
    const certs6 = ['Node', 'Git']

    return (
        <Box>
            <Box
                sx={{ height: { xs: '900px', sm: '900px', md: '645px', lg: '645px' } }}>
                <VisibilitySensor
                    onChange={(e) => {
                        if (e) setV1(e)
                    }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs1} visible={v1} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    offset={{ bottom: -175 }}
                    onChange={(e) => { if (e) setV1(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs1} visible={v1} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setV2(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs2} visible={v2} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setV2(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs2} visible={v2} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setV3(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs3} visible={v3} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setV3(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs3} visible={v3} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setV4(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs4} visible={v4} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setV4(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs4} visible={v4} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setV5(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs5} visible={v5} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setV5(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs5} visible={v5} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={(e) => { if (e) setV6(e) }}
                >
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs6} visible={v6} mobile={false} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -50 }}
                    onChange={(e) => { if (e) setV6(e) }}
                >
                    <Box
                        display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Certificate certs={certs6} visible={v6} mobile={true} />
                    </Box>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    offset={{ top: -75 }}
                    onChange={(e) => { if (e) setBottom(e) }}
                >
                    <Fade in={bottom}>
                        <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                            justifyContent='center'>
                            <div name='Contact Me'>
                                <Typography textAlign='center' className='titleHome'>
                                    OMAR
                                </Typography>
                            </div>
                        </Box>
                    </Fade>
                </VisibilitySensor>
            </Box>
        </Box>
    );
}
