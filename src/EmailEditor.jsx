import React, { useCallback, useState } from 'react';
import JoditEditor from '../node_modules/../src/JoditEditor';

const EmailEditor = () => {
	const [isSource, setSource] = useState(false);

	const [config, setConfig] = useState({
		readonly: false,
		toolbar: true
	});

	const [textAreaValue, setTextAreaValue] = useState('Test');

	const [inputValue, setInputValue] = useState('');

	const [spin, setSpin] = useState(1);

	const toggleToolbar = useCallback(
		() =>
			setConfig(config => ({
				...config,
				toolbar: !config.toolbar
			})),
		[]
	);

	const toggleReadOnly = useCallback(
		() =>
			setConfig(config => ({
				...config,
				readonly: !config.readonly
			})),
		[]
	);

	const handleBlurAreaChange = useCallback((textAreaValue, event) => {
		console.log('handleBlurAreaChange', textAreaValue, event);
	}, []);

	const handleWYSIWYGChange = useCallback(newTextAreaValue => {
		console.log('handleWYSIWYGChange', newTextAreaValue);

		setTextAreaValue(newTextAreaValue);
		setInputValue(newTextAreaValue);

		return setTextAreaValue(() => newTextAreaValue);
	}, []);

	const handleNativeTextAreaChange = useCallback(e => {
		console.log('handleNativeTextAreaChange', e.target.value);
		setTextAreaValue(e.target.value);
		setInputValue(e.target.value);
	}, []);

	const handleInputChange = useCallback(
		e => {
			const { value } = e.target;
			setInputValue(() => value);
			handleWYSIWYGChange(value);
		},
		[handleWYSIWYGChange]
	);

	const handleSpin = useCallback(() => setSpin(spin => ++spin), []);

	const onSourceChange = useCallback(e => {
		setSource(e.target.checked);
	}, []);

	return (
		<div>
			

			{!isSource ? (
				<JoditEditor
					config={config}
					onChange={handleWYSIWYGChange}
					onBlur={handleBlurAreaChange}
					value={textAreaValue}
				/>
			) : (
				<textarea
					className={'simple-textarea'}
					onChange={handleNativeTextAreaChange}
					value={textAreaValue}
				/>
			)}

			
		</div>
	);
};

export default EmailEditor;