import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color: white; text-decoration: none; text-transform: uppercase; font-family: 'Roboto', sans-serif; letter-spacing: 4px; font-weight: 700; position: relative; z-index:2; -webkit-transition: all .6s; -moz-transition: all .6s; -o-transition: all .6s; transition: all .6s; text-align: center; margin: 0 auto; padding: 18px 20px 5px 25px; }

::after{ content:''; position: absolute; height:5px; width: 20px; background-color: #CB3B32; bottom: -8px; left:0; right: 0; margin: 0 auto; z-index:-1; text-align:center; animation: minify .6s; animation-fill-mode: forwards; }
::hover{ color: #fff; }

:hover:after { animation: expand .6s; animation-fill-mode: forwards;  }

@keyframes expand {
  0% { height: 5px; width:34px; }
  50% { height: 48px; width:68px; }
  100% { height: 48px; width: 100%; left:-10px; right:-10px; background-color:  #b3b3b3; border: 2px ; padding: 0px; border-radius: 60px; }
}

@keyframes minify {
  0% { height: 5px; width: 100%; left:-10px; right:-10px; background-color: #494C5B; }
  50% { height: 5px; width:68px; }
  100% { height: 5px; width:34px; background-color: #CB3B32; }
}


`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`