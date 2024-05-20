import _ from 'lodash'

function mapToRange(input, input_start, input_end, output_start, output_end, clamped = false) {
	const slope = (output_end - output_start) / (input_end - input_start)
	let output = output_start + slope * (input - input_start)
	if (clamped) {
		if (output_start > output_end) {
			[output_start, output_end] = [output_end, output_start]
		}
		output = _.clamp(output, output_start, output_end)
	}
	return output
}

const toFixedValue = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);


export { mapToRange, toFixedValue};