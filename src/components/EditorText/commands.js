import { ref } from 'vue';

export default function useCommand() {
	const commands = ref([
		{ key: 'b', command: 'bold' },
		{ key: 'i', command: 'italic' },
		{ key: 'u', command: 'underline' },
	]);

	const getCommand = key => {
		const found = commands.value.find((item) => key === item.key);

		return found?.command;
	};

	const exec = (command, value=null) => document.execCommand(command, false, value);
	const queryCommandValue = (command) => document.queryCommandValue(command);

	return {
		commands,
		exec, 
		queryCommandValue,
		getCommand
	};
}