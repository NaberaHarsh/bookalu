import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import "./common.css";

type Props = FieldRenderProps<string[], any>;

const CountySelectInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
    return (
        <Fragment>
            <select  {...input} {...rest} value={input.value}>
                {
                    rest && rest.options && rest.options.length && rest.options.map((e) => (
                        <>
                            {
                                e === "" ? (
                                    <option value={""} selected id={'Bydefult-selectd'}>County</option>
                                ) : (
                                    <option id={e}>{e}</option>
                                )
                            }
                        </>
                    ))
                }
            </select>
            {meta.touched && meta.error && (
                <span className="error">*{meta.error}</span>
            )}
        </Fragment>
    )
};

export default CountySelectInput;