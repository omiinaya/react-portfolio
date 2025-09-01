import React, { createContext, useContext, ReactNode } from 'react';
import profileData from '../data/profile.json';

export interface ProfileData {
  basics: {
    name: string;
    headline: string;
    email: string;
    location: string;
    url: {
      label: string;
      href: string;
    };
    picture: {
      url: string;
      size: number;
      aspectRatio: number;
      borderRadius: number;
      effects: {
        hidden: boolean;
        border: boolean;
        grayscale: boolean;
      };
    };
  };
  sections: {
    experience: {
      items: Array<{
        id: string;
        visible: boolean;
        company: string;
        position: string;
        location: string;
        date: string;
        summary: string;
        url: {
          label: string;
          href: string;
        };
      }>;
    };
    certifications: {
      items: Array<{
        id: string;
        visible: boolean;
        name: string;
        issuer: string;
        date: string;
        summary: string;
        url: {
          label: string;
          href: string;
        };
      }>;
    };
    profiles: {
      items: Array<{
        id: string;
        visible: boolean;
        network: string;
        username: string;
        icon: string;
        url: {
          label: string;
          href: string;
        };
      }>;
    };
    languages: {
      items: Array<{
        id: string;
        visible: boolean;
        name: string;
        description: string;
        level: number;
      }>;
    };
    projects: {
      items: Array<{
        id: string;
        visible: boolean;
        name: string;
        description: string;
        technologies: string[];
        githubUrl: string;
        liveUrl: string;
        image?: string;
      }>;
    };
    // Add other sections as needed
    [key: string]: any;
  };
}

interface DataContextType {
  profile: ProfileData;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  return (
    <DataContext.Provider value={{ profile: profileData as ProfileData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};