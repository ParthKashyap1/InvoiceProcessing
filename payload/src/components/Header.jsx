
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const logo = "https://media.contentapi.ea.com/content/dam/eacom/en-us/common/legacy-nfs-abbreviated-logo-1.svg";

    return(
        <AppBar position="static">
            <Toolbar>
                <img src = {logo} alt="logo" style={{width: 120}} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;