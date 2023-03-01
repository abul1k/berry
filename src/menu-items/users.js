// assets

import { IconUsers } from '@tabler/icons';

// constant
const icons = { IconUsers };

const users = {
    id: 'ourUsers',
    title: 'Our users',
    type: 'group',
    children: [
        {
            id: 'user',
            title: 'Users',
            type: 'item',
            url: '/users-page',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default users;
