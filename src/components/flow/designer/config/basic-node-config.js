export const tools = [
	{
		type: 'drag',
		icon: 'drag',
		name: '拖拽'
	},
	{
		type: 'connection',
		icon: 'fork',
		name: '连线'
	},
	{
		type: 'zoom-in',
		icon: 'zoom-in',
		name: '放大'
	},
	{
		type: 'zoom-out',
		icon: 'zoom-out',
		name: '缩小'
	}
];

export const commonNodes = [
	{
		type: 'start',
		nodeName: '开始',
		icon: 'play-circle'
	},
	{
		type: 'end',
		nodeName: '结束',
		icon: 'stop'
	},
	{
		type: 'common',
		nodeName: '人工节点',
		icon: 'user'
	},
	{
		type: 'freedom',
		nodeName: '自动节点',
		icon: 'sync'
	},
	{
		type: 'gateway',
		nodeName: '网关',
		icon: 'gateway'
	},
	{
		type: 'event',
		nodeName: '事件',
		icon: 'select'
	}
];

export const highNodes = [
	{
		type: 'child-flow',
		nodeName: '子流程',
		icon: 'apartment'
	}
];

export const laneNodes = [
	{
		type: 'x-lane',
		nodeName: '横向泳道',
		icon: 'column-width'
	},
	{
		type: 'y-lane',
		nodeName: '纵向泳道',
		icon: 'column-height'
	}
];
