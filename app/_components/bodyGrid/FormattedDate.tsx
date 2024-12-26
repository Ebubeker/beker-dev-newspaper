"use client";

import React from 'react'
import { getFormattedDate } from "../../../lib/helpers";

const FormattedDate = () => {
  return (
    <p>{getFormattedDate()}</p>
  )
}

export default FormattedDate