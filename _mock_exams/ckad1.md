---
title: "CKAD exam 1"
layout: page
hide_title: true
questions:
  - ckad1_labels_and_pods
  - ckad1_nodes_and_taints
  - ckad1_deployments_and_autoscaling
  - ckad1_canary_and_loadbalancing
  - ckad1_cronjobs
  - ckad1_restricted_namespace
  - ckad1_serviceaccount_capture_the_flag
  - ckad1_identify_deployment_issues
  - ckad1_daemonsets_tls_secrets_observability
  - ckad1_namespace_limits
  - ckad1_readiness_liveness_tcp_probes
  - ckad1_network_policies
  - ckad1_ingress
  - ckad1_helm
  - ckad1_docker
  - ckad1_roles_and_rolebindings
  - ckad1_set_env_from_configmap
  - ckad1_final_topic
---
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div id="exam-ui">
  <div id="timer-container" style="display:block; width:100%; height:8px; background:#eee; margin-bottom:2px;">
    <div id="timer-bar" style="height:100%; width:100%; background:#4caf50; transition:width 1s linear;"></div>
  </div>

  <div id="question-nav">
    <div id="question-list-wrapper">
      <div id="question-list"></div>
    </div>
    <div id="nav-top">
      <button id="prevArrow" class="nav-arrow">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <div id="question-progress">
        Question <span id="current">1</span> of <span id="total">X</span>
      </div>
      <button id="nextArrow" class="nav-arrow">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
    </div>
  </div>
</div>

<div id="exam-intro">
  <div class="question-page intro-page" data-index="0">
    <h2>CKAD Exam Instructions</h2>
    <p>Before starting the exam, you must have a working MiniKube cluster. You must be able to add MiniKube nodes.</p>
    <p>Read all questions carefully.</p>
    <p>You can navigate through questions using the Next/Previous buttons.</p>
    <p>The bar at the top of the screen will show you the rough amount of time remaining. Total time is 2 hours.</p>

    <button id="startBtn">Start Exam</button>
  </div>
</div>

{% for q in page.questions %}
  <div class="question-page" data-index="{{ forloop.index0 }}" style="display: none;">
    {% include question.html id=q %}
  </div>
{% endfor %}

{% include exam-scripts.html %}

