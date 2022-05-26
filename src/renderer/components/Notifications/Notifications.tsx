import React from 'react';
import { EventType } from 'matrix-js-sdk';
import LinkButton from '../../ui/LinkButton';
import { useMatrix } from '../Providers/MatrixProvider';
import InviteNotif from './InviteNotif';
import MstNotif from './MstNotif';

const Notifications: React.FC = () => {
  const { notifications } = useMatrix();

  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="flex justify-center items-center">
          <LinkButton className="ml-2 absolute left-0" to="/">
            Back
          </LinkButton>
          <h1 className="h-16 p-4 font-light text-lg">Notifications</h1>
        </header>

        <main className="overflow-y-auto">
          <ul className="flex flex-col w-1/3 mx-auto gap-5">
            {notifications.map((notif) =>
              notif.type === EventType.RoomMember ? (
                <InviteNotif key={notif.id} notif={notif} />
              ) : (
                <MstNotif key={notif.id} notif={notif} />
              ),
            )}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Notifications;