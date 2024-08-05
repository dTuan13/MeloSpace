import { Box, Grid, Typography, Link, Container } from '@mui/material';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';

const ContainFoot = styled.div`
    position: absolute;
    bottom: 100px;
    background: #ffffff;
    left: 340px;
    /* width: 1010px; */
    flex: 1;
    Link {
        text-decoration: none;
        list-style-type: none;
    }
    .btnIcon {
        background-color: #f2efef;
        padding: 4px;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
    }
    svg {
        height: 24px;
        width: 24px;
    }
`;

const Footer = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredLink(index);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    const getLinkStyle = (index) => ({
        color: hoveredLink === index ? '#999999' : '#666666',
        textDecoration: 'none',
        cursor: 'pointer',
    });

    return (
        <ContainFoot>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: '#ffffff',
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={4}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Typography variant="h6" gutterBottom style={{ fontWeight: '600', fontSize: '16px' }}>
                                Công ty
                            </Typography>
                            {['Giới thiệu', 'Việc làm', 'For the Record'].map((text, index) => (
                                <div key={index}>
                                    <Link
                                        href="#"
                                        fontSize="14px"
                                        fontWeight="500"
                                        variant="body2"
                                        color="#5E5D5D"
                                        style={getLinkStyle(index)}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {text}
                                    </Link>
                                    <br />
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Typography variant="h6" gutterBottom style={{ fontWeight: '600', fontSize: '16px' }}>
                                Cộng đồng
                            </Typography>
                            {['Dành cho người dùng', 'Nhà phát triển', 'Quảng cáo', 'Nhà đầu tư', 'Nhà cung cấp'].map(
                                (text, index) => (
                                    <div key={index + 3}>
                                        <Link
                                            href="#"
                                            variant="body2"
                                            fontSize="14px"
                                            fontWeight="500"
                                            color="#5E5D5D"
                                            style={getLinkStyle(index + 3)}
                                            onMouseEnter={() => handleMouseEnter(index + 3)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {text}
                                        </Link>
                                        <br />
                                    </div>
                                ),
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Typography variant="h6" gutterBottom style={{ fontWeight: '600', fontSize: '16px' }}>
                                Liên kết
                            </Typography>
                            {['Hỗ trợ', 'Ứng dụng di động miễn phí'].map((text, index) => (
                                <div key={index + 8}>
                                    <Link
                                        href="#"
                                        variant="body2"
                                        fontSize="14px"
                                        fontWeight="500"
                                        color="#5E5D5D"
                                        style={getLinkStyle(index + 8)}
                                        onMouseEnter={() => handleMouseEnter(index + 8)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {text}
                                    </Link>
                                    <br />
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Typography variant="h6" gutterBottom style={{ fontWeight: '600', fontSize: '16px' }}>
                                MeloSpace
                            </Typography>
                            {['Premium', 'MeloSpace Free'].map((text, index) => (
                                <div key={index + 10}>
                                    <Link
                                        href="#"
                                        variant="body2"
                                        fontSize="14px"
                                        fontWeight="500"
                                        color="#5E5D5D"
                                        style={getLinkStyle(index + 10)}
                                        onMouseEnter={() => handleMouseEnter(index + 10)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {text}
                                    </Link>
                                    <br />
                                </div>
                            ))}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                                style={{ fontWeight: '600', fontSize: '16px' }}
                            ></Typography>
                            {[
                                <InstagramIcon key="instagram" />,
                                <FacebookIcon key="facebook" />,
                                <TwitterIcon key="twitter" />,
                            ].map((icon, index) => (
                                <Link
                                    href="#"
                                    variant="body2"
                                    height="20px"
                                    width="20px"
                                    color="#5E5D5D"
                                    style={getLinkStyle(index + 12)}
                                    onMouseEnter={() => handleMouseEnter(index + 12)}
                                    onMouseLeave={handleMouseLeave}
                                    key={index + 12}
                                >
                                    <div className="btnIcon">{icon}</div>
                                </Link>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ContainFoot>
    );
};

export default Footer;
