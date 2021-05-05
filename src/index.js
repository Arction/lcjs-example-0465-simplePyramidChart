/*
 * LightningChartJS example that shows the creation and styling of a Pyramid chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    PyramidChartTypes,
    PyramidLabelSide,
    SliceLabelFormatters,
    lightningChart,
    LegendBoxBuilders,
    SolidFillPalette,
    ColorPalettes,
    UIOrigins,
    Themes
} = lcjs

// Create a Pyramid chart
const pyramid = lightningChart()
    .Pyramid({
        // theme: Themes.dark 
        type: PyramidChartTypes.LabelsOnSides
    })
    .setTitle('Company staff growth')
    .setAnimationsEnabled(true)
    .setNeckWidth(80)
    .setSliceGap(5)
    .setPadding({ bottom: 45 })
    .setLabelSide(PyramidLabelSide.Right)

// Data for slices
const data = [
    {
        name: '2015 - 2016',
        value: 3
    },
    {
        name: '2016 - 2017',
        value: 5
    },
    {
        name: '2017 - 2018',
        value: 10
    },
    {
        name: '2018 - 2019',
        value: 17
    }
]
// Add data to the slices
pyramid.addSlices(data)


// Create warm Palette for Pyramid (defines color of Slice filling)
// const palette = SolidFillPalette(ColorPalettes.warm, data.length)
// pyramid.setSliceFillStyle(palette)

// Set formatter of Slice Labels
pyramid.setLabelFormatter(SliceLabelFormatters.NamePlusValue)

// Add LegendBox and define the position in the chart
const lb = pyramid
    .addLegendBox(LegendBoxBuilders.HorizontalLegendBox)

// Add the Pyramid to the LegendBox and disable the button click functionality.
lb.add(pyramid, { disposeOnClick: false })
