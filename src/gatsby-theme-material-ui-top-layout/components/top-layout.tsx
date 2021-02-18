import React from 'react';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import NavHeader from '../../components/NavHeader';

export default function TopLayout({ children, theme }) {
    return (
        <ThemeTopLayout theme={theme}>
            <NavHeader />
            {children}
        </ThemeTopLayout>
    );
}
