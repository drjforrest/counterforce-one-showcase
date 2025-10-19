# Research Visualizations & Network Analysis

## Overview

Counterforce-One research includes powerful visualization methods to understand health misinformation patterns and community resilience. Our research methodology includes both interactive dashboards and detailed network visualizations to analyze community dynamics.

## Research Network Diagrams

Our research methodology includes 4 detailed network diagrams corresponding to our key case studies:

### Case Study Network Visualizations

1. **"U=U, 100%!" Network** - Research visualization of how accurate HIV treatment information spreads with community nuance
2. **"HIV is life altering..." Network** - Analysis of the challenge of identifying and correcting subtle misinformation
3. **"was recently diagnosed with hiv" Network** - Study of peer support patterns and community response
4. **"prep exists folks weird about condoms" Network** - Research into knowledge gaps and community education opportunities

Each network diagram reveals:
- **Comment reply relationships** - Communication patterns between users
- **Node size by comment score** - Influence and engagement indicators
- **Community resilience indicators** - How communities respond to health information

## Research Showcase Interface

The public research showcase presents these findings in an accessible format for academic and public health audiences. The showcase includes:

- Interactive case study exploration
- Network diagram integration
- Research finding summaries
- Methodology explanation

### Research Data Access

The research visualizations are generated from data located in:
```
data/demo_visualizations/
├── network_1ls1tyz.html    # U=U network
├── network_1lyphrb.html    # HIV life altering network
├── network_1la8c64.html    # Recently diagnosed network
├── network_1lhs70z.html    # PrEP/condoms network
└── ...
```

## Research Dashboard Features

- **Community Network Maps**: Interactive social graphs for relationship analysis
- **Language Distribution**: Multilingual content pattern analysis
- **Temporal Analysis**: Time-series health discussion trends
- **Support Network Visualization**: Community resilience indicators

## Technical Implementation

The visualization tools are implemented using the following technical components:

- **Network Visualization**: Built with NetworkX and Plotly for interactive exploration
- **Data Processing**: Python-based analysis pipeline with PostgreSQL backend
- **Web Interface**: Gradio-based interfaces for research access

### Generating Research Visualizations

To generate additional research visualizations for analysis:

```bash
python tools/generate_demo_visualizations.py
```

This will create new network diagrams and other visualizations based on your current research dataset.