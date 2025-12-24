import React from 'react';

export interface HouseModel {
    id: string;
    name: string;
    area: number;
    bedrooms: number;
    price: string;
    image: string;
    description: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}

export interface FeatureProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}