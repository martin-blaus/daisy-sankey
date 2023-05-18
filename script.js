var units = "Widgets";

var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 1200 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

var formatNumber = d3.format(",.0f"),    // zero decimal places
    format = function (d) { return formatNumber(d) + " " + units; },
    color = d3.scale.category20();

// append the svg canvas to the page
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Set the sankey diagram properties
console.log(width, height)
var sankey = d3.sankey()
    .nodeWidth(25)
    .nodePadding(8)
    .size([width, height]);

var path = sankey.link();
// load the data
let graph = {
    nodes:
        [{ node: 0, name: 'expenses' },
        { node: 2, name: 'Taxes' },
        { node: 3, name: 'Property Taxes' },
        { node: 4, name: 'Utilities' },
        { node: 5, name: 'Electricity' },
        { node: 6, name: 'Cable/ Satellite/Internet/Telephone' },
        { node: 7, name: 'Water / Sewer' },
        { node: 8, name: 'Gas' },
        { node: 9, name: 'Administrative Expenses' },
        { node: 10, name: 'Credit Card Convenience Expense' },
        { node: 11, name: 'Office Supplies' },
        { node: 12, name: 'Other Administrative Expense' },
        { node: 13, name: 'Management Fees' },
        { node: 14, name: 'Legal Fees' },
        { node: 15, name: 'Accounting / Audit / Tax Services' },
        { node: 16, name: 'Other Professional Fees' },
        { node: 17, name: 'Donation/Charitable Contributions' },
        { node: 18, name: 'Bank Fees' },
        { node: 19, name: 'Payroll Expenses' },
        { node: 20, name: 'Workers\' Compensation, EPLI, & Disability' },
        { node: 21, name: 'Employer Paid Taxes' },
        { node: 22, name: 'Payroll Administration Fees' },
        { node: 23, name: 'Wages' },
        { node: 24, name: 'Independent Contract (e.g. 1099 Supers)' },
        { node: 25, name: 'Non-Recurring-  Repairs' },
        { node: 26, name: 'Plumbing Repairs' },
        { node: 27, name: 'Repair Supplies' },
        { node: 28, name: 'Elevator Repairs' },
        { node: 29, name: 'Electrical Repairs' },
        { node: 30, name: 'Boiler & Water Tank Repairs' },
        { node: 31, name: 'HVAC Repairs' },
        { node: 32, name: 'Building Operating Expenses' },
        { node: 33, name: 'Pest Control Services' },
        { node: 34, name: 'Landscape Contract, Flowers, Plants' },
        { node: 35, name: 'Fire Monitoring & Sprinkler System / Pumps' },
        { node: 36, name: 'Elevator - Contract' },
        { node: 37, name: 'HVAC & Cooling Tower Service Contract' },
        { node: 38, name: '52775 -Water Conditioning and Treatments' },
        { node: 39, name: 'Intercom Service Contract' },
        { node: 40, name: 'Cleaning & General Maintenance Supplies' },
        { node: 41, name: 'Projects & Capital Expenditures' },
        { node: 42, name: 'Engineer/Architect Expense' },
        { node: 43, name: 'Insurance' },
        { node: 44, name: 'Insurance' },
        { node: 45, name: 'Compliance & Monitoring' },
        { node: 46, name: 'Penalties/Fines' },
        { node: 47, name: 'Plumbing Inspection' }],
    links:
        [{ source: 0, target: 2, value: 175 },
        { source: 2, target: 3, value: 175 },
        { source: 0, target: 4, value: 45645 },
        { source: 4, target: 5, value: 22995 },
        { source: 4, target: 6, value: 1133 },
        { source: 4, target: 7, value: 6660 },
        { source: 4, target: 8, value: 14857 },
        { source: 0, target: 9, value: 25093 },
        { source: 9, target: 10, value: 725 },
        { source: 9, target: 11, value: 723 },
        { source: 9, target: 12, value: 886 },
        { source: 9, target: 13, value: 9888 },
        { source: 9, target: 14, value: 4966 },
        { source: 9, target: 15, value: 6500 },
        { source: 9, target: 16, value: 726 },
        { source: 9, target: 17, value: 500 },
        { source: 9, target: 18, value: 179 },
        { source: 0, target: 19, value: 149991 },
        { source: 19, target: 20, value: 3653 },
        { source: 19, target: 21, value: 12678 },
        { source: 19, target: 22, value: 4778 },
        { source: 19, target: 23, value: 125963 },
        { source: 19, target: 24, value: 2918 },
        { source: 0, target: 25, value: 26187 },
        { source: 25, target: 26, value: 13771 },
        { source: 25, target: 27, value: 131 },
        { source: 25, target: 28, value: 1037 },
        { source: 25, target: 29, value: 2250 },
        { source: 25, target: 30, value: 7365 },
        { source: 25, target: 31, value: 1633 },
        { source: 0, target: 32, value: 26485 },
        { source: 32, target: 33, value: 1561 },
        { source: 32, target: 34, value: 9000 },
        { source: 32, target: 35, value: 1437 },
        { source: 32, target: 36, value: 3338 },
        { source: 32, target: 37, value: 3209 },
        { source: 32, target: 38, value: 4615 },
        { source: 32, target: 39, value: 544 },
        { source: 32, target: 40, value: 2782 },
        { source: 0, target: 41, value: 3900 },
        { source: 41, target: 42, value: 3900 },
        { source: 0, target: 43, value: 15435 },
        { source: 43, target: 44, value: 15435 },
        { source: 0, target: 45, value: 865 },
        { source: 45, target: 46, value: 266 },
        ]
}

sankey
    .nodes(graph.nodes)
    .links(graph.links)
    .layout(32);

console.log(graph.nodes.length)

// add in the links
var link = svg.append("g").selectAll(".link")
    .data(graph.links)
    .enter().append("path")
    .attr("class", "link")
    .attr("d", path)
    .style("stroke-width", function (d) { return Math.max(1, d.dy); })
    .sort(function (a, b) { return b.dy - a.dy; });

// add the link titles
link.append("title")
    .text(function (d) {
        return d.source.name + " → " +
            d.target.name + "\n" + format(d.value);
    });

// add in the nodes
var node = svg.append("g").selectAll(".node")
    .data(graph.nodes)
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    })
    .call(d3.behavior.drag()
        .origin(function (d) { return d; })
        .on("dragstart", function () {
            this.parentNode.appendChild(this);
        })
        .on("drag", dragmove));

// add the rectangles for the nodes
node.append("rect")
    .attr("height", function (d) {
        return d.dy // d.dy < 0 ? 0 : d.y;
    })
    .attr("width", sankey.nodeWidth())
    .style("fill", function (d) {
        return d.color = color(d.name.replace(/ .*/, ""));
    })
    .style("stroke", function (d) {
        return d3.rgb(d.color).darker(2);
    })
    .append("title")
    .text(function (d) {
        return d.name + "\n" + format(d.value);
    });
// add in the title for the nodes
node.append("text")
    .attr("x", -6)
    .attr("y", function (d) { return d.dy / 2; })
    .attr("dy", ".35em")
    .attr("text-anchor", "end")
    .attr("transform", null)
    .text(function (d) { return d.name; })
    .filter(function (d) { return d.x < width / 2; })
    .attr("x", 6 + sankey.nodeWidth())
    .attr("text-anchor", "start");

// the function for moving the nodes
function dragmove(d) {
    d3.select(this).attr("transform",
        "translate(" + (
            d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
        ) + "," + (
            d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
        ) + ")");
    sankey.relayout();
    link.attr("d", path);
}