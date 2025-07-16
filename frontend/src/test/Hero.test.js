import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Landing_page/home/Hero';
import '@testing-library/jest-dom/extend-expect';

describe("Hero Component",()=>{
    test("renders hero image",()=> {
        render(<Hero />);
        const heroImage = screen.getByAltText("hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "/media/homeHero.png");
    });
});
