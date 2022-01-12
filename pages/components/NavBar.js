import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;
const scroller = Scroll.scroller;
const pages = ['Home', 'Skills', 'Certifications', 'Portfolio', 'Contact Me'];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function scrollToTop() {
    scroll.scrollToTop({
      smooth: true,
      duration: 450
    })
  }

  function scrollTo(name, offset) {
    console.log(name)
    scroller.scrollTo(name, {
      smooth: true,
      duration: 450,
      offset: offset
    })
  }

  return (
    <Box className='rootNavBar'>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            sx={{ my: 3, color: 'white', display: { xs: 'none', md: 'block' } }}
            onClick={() => {
              scrollToTop()
            }}
          >
            LOGO
          </Button>
          <Box sx={{
            color: 'white',
            display: {
              xs: 'block',
              md: 'none'
            }
          }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {
                  if (page != 'Home') {
                    scrollTo(page, -150)
                  } else {
                    scrollToTop()
                  }
                }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {
                if (page != 'Home') {
                  scrollTo(page, -200)
                } else {
                  scrollToTop()
                }
              }}
              sx={{ my: 3, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Button
            sx={{ my: 3, color: 'white' }}
            onClick={() => {
              scrollToTop()
            }}
          >
            LOGO
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Button
            sx={{ my: 3, color: 'white', display: 'block' }}
          >
            END
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
};