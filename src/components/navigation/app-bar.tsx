import { memo, type RefObject } from 'react';
import { Menu } from 'lucide-react';
import { Link } from '@tanstack/react-router';
const adminPhoto = { url: '/__l5e/assets-v1/3660d50d-98bf-4422-97c9-c472a8702974/51de6e3f-admin-photo.webp' };
import { Button } from '@/components/ui/button';
import { AdminProfile } from './admin-profile';

interface AppBarProps {
  triggerRef: RefObject<HTMLButtonElement | null>;
  menuExpanded: boolean;
  profileOpen: boolean;
  onToggleMenu: () => void;
  onToggleProfile: () => void;
  onCloseProfile: () => void;
}

export const AppBar = memo(function AppBar({ triggerRef, menuExpanded, profileOpen, onToggleMenu, onToggleProfile, onCloseProfile }: AppBarProps) {
  return <header className="library-appbar">
    <Button ref={triggerRef} variant="source" size="source" className="library-icon-control" aria-label="Toggle class menu" aria-controls="library-navigation" aria-expanded={menuExpanded} onClick={onToggleMenu} title="Class menu"><Menu /></Button>
    <Button asChild variant="source" size="source" className="library-brand"><Link to="/"><span>FRESH TEACHER'S LIBRARY</span><span className="library-brand-caption">For Fresh Teachers and Planned Kids</span></Link></Button>
    <div className="library-appbar-actions">
      <Button variant="source" size="source" className="library-avatar" aria-label="Admin's contact" aria-expanded={profileOpen} onClick={onToggleProfile}>
        <img src={adminPhoto.url} alt="Mutumba Jesse Paul" />
      </Button>
      <AdminProfile open={profileOpen} onClose={onCloseProfile} />
    </div>
  </header>;
});