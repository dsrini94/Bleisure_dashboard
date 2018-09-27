import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';
import { scaleCategory20 } from 'd3-scale';
import lesMisJSON from './../../les-miserable.json';

export default class Analysis extends React.Component{
  render() {

    const scale = scaleCategory20();
    return(
      <div>
        <InteractiveForceGraph
          highlightDependencies
          onSelectNode={(node) => console.log(node)}
        >
          {lesMisJSON.nodes.map(node => (
            <ForceGraphNode
              key={node.id}
              fill={scale(node.group)}
              node={{node, radius: 5 }}
            />
          )).map(attachEvents)}
          {lesMisJSON.links.map(link => (
            <ForceGraphLink
              key={`${link.source}=>${link.target}`}
              link={{link, value: 2 }}
            />
          )).map(attachEvents)}
        </InteractiveForceGraph>
      </div>
    );
  }
}
