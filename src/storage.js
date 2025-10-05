// Use placeholder URLs (or replace with '/assets/...' if you put images in public/assets)
const placeholder = (initials) => `https://via.placeholder.com/80?text=${initials}`;

export const stats = [
	{ id: 1, task_title: 'Completed', quan: 24, task_status: 'done', task_color: 'green' },
	{ id: 2, task_title: 'In Progress', quan: 8, task_status: 'ongoing', task_color: 'orange' },
	{ id: 3, task_title: 'Pending', quan: 12, task_status: 'pending', task_color: 'gray' },
];

export const manager = {
	manager_name: 'Jordan Smith',
	title: 'Product Manager',
	email: 'jordan.smith@example.com',
	avatar: placeholder('JS'),
};

export const teamMembers = [
	{ team_name: 'Alex Rivera', role: 'Developer', avatar: placeholder('AR') },
	{ team_name: 'Emma Devis', role: 'Designer', avatar: placeholder('ED') },
	{ team_name: 'Mike Johnson', role: 'QA', avatar: placeholder('MJ') },
];

export const notifications = [
	{ noti_title: 'New Comment', content: 'Alice left a comment on Project X', time: '2h' },
	{ noti_title: 'Task Assigned', content: 'You were assigned a new task', time: '1d' },
];

export const recentActivity = [
	{ person: 'Alex Rivera', deed: 'updated', thing: 'Task 12', time: '30m' },
	{ person: 'Emma Devis', deed: 'commented on', thing: 'Project Alpha', time: '3h' },
];

export const projects = [
	{
		proj_title: 'Project Alpha',
		description: 'Landing page redesign',
		members: ['Alex Rivera', 'Emma Devis'],
		date: '2025-09-01',
	},
	{
		proj_title: 'Project Beta',
		description: 'Mobile app v2',
		members: ['Mike Johnson', 'Jordan Smith'],
		date: '2025-10-15',
	},
];

export const tasks = [
	{
		task_title: 'Design hero section',
		description: 'Create layouts for hero',
		person: 'Emma Devis',
		date: '2025-09-10',
	},
	{
		task_title: 'API integration',
		description: 'Connect tasks endpoint',
		person: 'Alex Rivera',
		date: '2025-09-12',
	},
];