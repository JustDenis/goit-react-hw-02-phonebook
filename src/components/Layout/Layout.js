import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    width: 350px;
    margin: 0 auto;
    padding-top: 40px;
`;

function Layout({children}) {
    return (
        <Section>
            {children}
        </Section>
    )
}

export default Layout;