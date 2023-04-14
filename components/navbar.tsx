import {
  LogoutIcon,
  NavbarButton,
  NavbarMumble,
  ProfilePicture,
  SettingsIcon,
} from '@smartive-education/design-system-component-library-bytelight';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center bg-violet-600 w-full  px-[25px] md:px-[50px] xl:px-[360px] py-xs">
      <Link href={'/feed'}>
        <NavbarMumble />
      </Link>

      <div className="w-full flex justify-end items-center gap-x-s">
        <Link href={`/profile/${session?.user.id}`}>
          <ProfilePicture
            size="S"
            src={
              session?.user.avatarUrl ??
              'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
            }
            alt="profile-avatar"
          />
        </Link>

        <div className="text-white">
          <NavbarButton label="Settings" onClick={() => alert('Hoi')}>
            <div className="group-hover:rotate-180 transition duration-1000 transform-none text-white">
              <SettingsIcon size="16px" />
            </div>
          </NavbarButton>
        </div>
        <div className="text-white">
          <NavbarButton
            label="Log Out"
            onClick={() => {
              signOut({ callbackUrl: '/login' });
            }}
          >
            <div className="text-white">
              <LogoutIcon size="16px" />
            </div>
          </NavbarButton>
        </div>
      </div>
    </div>
  );
};
