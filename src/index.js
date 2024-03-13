/*
 * LightningChartJS example that shows the creation and styling of a Pyramid chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { PyramidChartTypes, PyramidLabelSide, SliceLabelFormatters, lightningChart, LegendBoxBuilders, Themes } = lcjs

// Create a Pyramid chart
const pyramid = lightningChart()
    .Pyramid({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
        type: PyramidChartTypes.LabelsOnSides,
    })
    .setTitle('Company staff growth')
    .setNeckWidth(80)
    .setSliceGap(5)
    .setPadding({ bottom: 45 })
    .setLabelSide(PyramidLabelSide.Right)

// Data for slices
const data = [
    {
        name: '2015 - 2016',
        value: 3,
    },
    {
        name: '2016 - 2017',
        value: 5,
    },
    {
        name: '2017 - 2018',
        value: 10,
    },
    {
        name: '2018 - 2019',
        value: 17,
    },
]
// Add data to the slices
pyramid.addSlices(data)

// Set formatter of Slice Labels
pyramid.setLabelFormatter(SliceLabelFormatters.NamePlusValue)

// Add LegendBox and define the position in the chart
const lb = pyramid
    .addLegendBox(LegendBoxBuilders.HorizontalLegendBox)
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.8,
    })

// Add the Pyramid to the LegendBox and disable the button click functionality.
lb.add(pyramid, { toggleVisibilityOnClick: false })
