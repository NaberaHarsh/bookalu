import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import { DurationPicker } from '@ui5/webcomponents-react';

type Props = FieldRenderProps<any, any>;

const HourMinutesSelect: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
    return (
        <Fragment>
            <DurationPicker
                maxValue={rest.maxValue}
                hideSeconds={rest.hideSeconds}
                formatPattern={rest.formatPattern}
                style={rest.style}
                {...input}
                {...rest}
            />
            {meta.touched && meta.error && (
                <span className={`error `}>*{meta.error}</span>
            )}
        </Fragment>
    );
};

export default HourMinutesSelect;