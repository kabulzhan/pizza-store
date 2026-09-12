"use client"

import React from "react"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "cn"

type SliderProps = {
  className?: string
  min: number
  max: number
  step: number
  formatLabel?: (value: number) => string
  value?: number[] | readonly number[]
  onValueChange?: (values: number[]) => void
}

const RangeSlider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      ...props
    }: SliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max]
    const [localValues, setLocalValues] = React.useState(initialValue)

    React.useEffect(() => {
      // Update localValues when the external value prop changes
      setLocalValues(Array.isArray(value) ? value : [min, max])
    }, [min, max, value])

    const handleValueChange = (newValues: number[]) => {
      console.log("HERE: ")
      setLocalValues(newValues)
      if (onValueChange) {
        onValueChange(newValues)
      }
    }

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative mb-6 flex w-full touch-none items-center select-none",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Control className="relative flex w-full touch-none items-center">
          <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Indicator className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          {localValues.map((v, index) => (
            <React.Fragment key={index}>
              <div
                className="absolute text-center"
                style={{
                  left: `calc(${((v - min) / (max - min)) * 100}% + 0px)`,
                  top: `10px`,
                }}
              >
                <span className="text-sm">
                  {formatLabel ? formatLabel(v) : v}
                </span>
              </div>
              <SliderPrimitive.Thumb
                aria-label={`Thumb ${index + 1}`}
                className="block h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              />
            </React.Fragment>
          ))}
        </SliderPrimitive.Control>
      </SliderPrimitive.Root>
    )
  }
)

RangeSlider.displayName = "RangeSlider"

export { RangeSlider }
