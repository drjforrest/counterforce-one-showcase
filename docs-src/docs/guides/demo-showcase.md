# Research Showcase Interface

## Overview

The Counterforce-One Research Showcase is a public-facing interface that presents our research findings in an accessible format. It features 4 annotated case studies with interactive network diagrams, demonstrating community resilience patterns in health misinformation contexts.

This research showcase communicates key findings to academic and public health audiences, making complex network analysis accessible to broader communities.

## Research Showcase Content

### Interactive Case Studies
The research showcase presents 4 key annotated case studies:
- **"U=U, 100%!"** - Analysis of accurate HIV treatment information with community nuance
- **"HIV is life altering..."** - Study of subtle misinformation detection challenges
- **"was recently diagnosed with hiv"** - Research on peer support patterns in communities
- **"prep exists folks weird about condoms"** - Investigation of knowledge gaps and community education

### Research Network Visualizations
Each case study includes research network diagrams showing:
- Comment reply relationship patterns
- Node size representing engagement metrics
- Community interaction structures
- Knowledge broker identification in networks

### Research Dataset Overview
- 4 fully annotated key research posts
- 261 detailed comments from key posts
- 30 top posts by engagement (1,632 comments total)
- Ground truth annotations for research validation

## Technical Implementation

### Local Development Environment
To run the research showcase locally for development and testing:

```bash
python tools/launch_demo_showcase_v2.py
```

The showcase will be available at: **http://localhost:7860**

### Repository Structure
The showcase exists as a separate repository for deployment purposes:
- Located in the `/showcase` directory of the main project
- Independent deployment pipeline for public access
- Optimized for research communication
- Maintains connection with main research platform

### Public Access Options

#### Local Testing
```bash
python tools/launch_demo_showcase_v2.py
```

#### Temporary Public Sharing
To generate a temporary public link for research feedback:
1. Edit `tools/launch_demo_showcase_v2.py`
2. Change `share=False` to `share=True`
3. Run the script again
4. Gradio will generate a public URL (valid for 72 hours)

#### Production Deployment
The research showcase is deployed to Vercel for permanent public access, allowing broader academic and public health communities to explore the research findings.

### Technical Architecture

The showcase implementation includes:
- **Framework**: Built with Gradio for interactive exploration
- **Design**: Responsive interface for accessibility across devices
- **Performance**: Optimized loading of large network visualizations
- **Integration**: Connections to research database for live data
- **Tools**: Annotation visualization capabilities for research communication