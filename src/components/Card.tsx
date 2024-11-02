import imageAvatar from '../assets/images/image-avatar.png';
import imageEquilibrium from '../assets/images/image-equilibrium.jpg';
import iconEth from '../assets/images/icon-ethereum.svg';
import iconClock from '../assets/images/icon-clock.svg';
import iconView from '../assets/images/icon-view.svg';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function NftCard() {
  return (
    <div
      className='h-screen flex items-center justify-center bg-background'
      style={{
        fontFamily: "'Outfit', serif",
      }}
    >
      <Card className='w-80 border-none bg-card mx-2'>
        <CardHeader>
          <div className='group relative'>
            <img
              src={imageEquilibrium}
              alt='Equilibrium'
              className='object-cover rounded-xl w-full h-auto'
            />
            {/* Overlay için ana div */}
            <div className='cursor-pointer absolute inset-0 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300'>
              {/* yarı şeffaf arka plan */}
              <div className='absolute inset-0 bg-primary rounded-xl bg-opacity-0 group-hover:opacity-60 transition duration-300'></div>

              {/* İkon */}
              <img src={iconView} alt='icon view' className='relative z-10' />
            </div>
          </div>
        </CardHeader>
        <CardContent className='pb-4'>
          <h2 className='text-lg text-muted font-semibold tracking-wide mb-3 hover:text-primary cursor-pointer transition duration-300 w-44'>
            Equilibrium #3429
          </h2>
          <p className='opacity-90 font-light tracking-wide mb-5 text-base text-secondary'>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className='flex items-center justify-between mb-6'>
            <span className='flex items-center gap-x-2 text-sm text-primary'>
              <img src={iconEth} alt='icon eth' className='w-2.5 h-4' /> 0.041
              ETH
            </span>
            <span className='flex items-center gap-x-2 opacity-85 text-sm text-secondary'>
              <img src={iconClock} alt='icon clock' className='w-4 h-4' /> 3
              days left
            </span>
          </div>
          <Separator style={{ background: 'hsl(215, 32%, 27%)' }} />
        </CardContent>
        <CardFooter>
          <Avatar className='border w-8 h-8'>
            <AvatarImage src={imageAvatar} alt='profile image' />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
          <p className='ml-4 opacity-95 font-light tracking-wide text-sm text-secondary'>
            Creation of
            <span className='ml-1 text-white hover:text-primary cursor-pointer transition duration-300'>
              Jules Wyvern
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default NftCard;
