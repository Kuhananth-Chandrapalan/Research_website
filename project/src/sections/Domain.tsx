import {
  CircuitBoard,
  Code,
  Cpu,
  Database,
  Layers,
  Lock,
  Microscope,
  Network
} from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const Domain: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="domain" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Research Domain" 
          subtitle="Understanding the integration of deep learning and blockchain for traffic anomaly detection"
        />
        
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Literature Review</h3>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-5 text-gray-700 leading-relaxed">

            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Introduction</h4>
              <p>
                Intelligent Transportation Systems (ITS) have rapidly evolved with the integration of artificial intelligence and computer vision. Real-time traffic anomaly detection plays a pivotal role in road safety, vehicle behavior analysis, and regulatory compliance. This review explores the contributions of modern deep learning models and blockchain systems toward building secure, scalable, and autonomous traffic management solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Vehicle Behavior Detection</h4>
              <p>
                Modern object detection models such as YOLOv8 provide high-speed and accurate identification of vehicles in live video streams. These models, when combined with object tracking algorithms like SORT and Kalman filters, enable reliable tracking across frames. Hybrid detection systems use CNN-LSTM or HMMs to analyze temporal vehicle behaviors, such as sudden stops or unsafe lane changes, making them effective for critical event prediction.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Red-Light Violation and Pothole Detection</h4>
              <p>
                Rule violation systems monitor the position of vehicles relative to traffic signals using line-crossing logic, frame differencing, and traffic signal state detection via semantic segmentation. Pothole detection uses edge-based texture mapping, Gaussian filtering, and GPS metadata integration to notify road authorities in real time about hazardous infrastructure conditions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Pedestrian Intention Recognition</h4>
              <p>
                Accurate pedestrian intent prediction is critical at urban intersections. Pose estimation models like OpenPose or BlazePose track limb movements and body posture. These keypoints are evaluated with CNNs and LSTMs to detect crossing behavior, while Time-to-Collision (TTC) values offer real-time threat assessment. TTC thresholds help in triggering early warnings to prevent accidents.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Blockchain for Data Security</h4>
              <p>
                Blockchain technologies offer decentralized and tamper-proof solutions for traffic event logging. Platforms like Ethereum support smart contracts to automate violation validation and penalties. Due to high storage costs, logs are compressed (e.g., using BZ2) and encoded (e.g., Base64) before being written to the chain. This ensures secure, auditable, and efficient traffic data storage.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">6. Edge Deployment Challenges</h4>
              <p>
                Real-time ITS applications demand fast model inference and low-latency operations. Frameworks like TensorRT, ONNX Runtime, and quantized models allow deployment on resource-constrained devices such as Jetson Nano. The system must sustain at least 10 FPS and trigger responses under 100ms latency while maintaining lightweight blockchain transactions.
              </p>
            </div>

          </div>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[1] = el)}
          className="mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Research Gap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-3">
                <Microscope size={20} className="mr-2" />
                Scalability Limitations
              </h4>
              <p className="text-gray-700">
                Existing systems struggle with processing high volumes of traffic data in real-time,
                limiting their practical application in busy urban environments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-3">
                <Layers size={20} className="mr-2" />
                Limited Real-World Testing
              </h4>
              <p className="text-gray-700">
                Many proposed solutions have been evaluated only in controlled environments,
                not accounting for varied real-world conditions like weather and lighting changes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-3">
                <Network size={20} className="mr-2" />
                Lack of Multi-Source Fusion
              </h4>
              <p className="text-gray-700">
                Current approaches tend to use single data sources rather than integrating
                multiple detection methods for more robust and accurate anomaly identification.
              </p>
            </div>
          </div>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[2] = el)}
          className="mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Problem Statement</h3>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              How can deep learning models be effectively integrated with blockchain technology to create
              a scalable, real-time traffic anomaly detection system that ensures data integrity while
              automating traffic law enforcement through smart contracts?
            </p>
          </div>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[3] = el)}
          className="mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">General and Specific Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">General Objective</h4>
              <p className="text-gray-700">
                To develop an integrated system that leverages deep learning for real-time traffic anomaly
                detection and blockchain technology for secure, tamper-proof storage and automated enforcement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Specific Objectives</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Implement YOLOv8 for vehicle detection and tracking</li>
                <li>Develop CNN and LSTM models for motion pattern analysis</li>
                <li>Create HMM models for anomaly classification</li>
                <li>Establish a private Ethereum blockchain for data storage</li>
                <li>Design smart contracts for automated enforcement</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[4] = el)}
          className="mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Conceptual Diagram and Methodology</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6">
              <p className="text-blue-800 italic">
                Our methodology combines computer vision for anomaly detection with blockchain technology
                for secure storage and automated enforcement through smart contracts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Detection Layer</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded mr-2 mt-1">
                      <Cpu size={16} className="text-blue-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>YOLOv8:</strong> Object detection and vehicle tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded mr-2 mt-1">
                      <Cpu size={16} className="text-blue-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>CNN:</strong> Feature extraction from video frames
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded mr-2 mt-1">
                      <Cpu size={16} className="text-blue-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>LSTM:</strong> Temporal pattern recognition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded mr-2 mt-1">
                      <Cpu size={16} className="text-blue-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>HMM:</strong> Probabilistic state modeling for anomaly detection
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Storage & Enforcement Layer</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded mr-2 mt-1">
                      <Database size={16} className="text-green-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>Ethereum:</strong> Private blockchain for immutable event records
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded mr-2 mt-1">
                      <Lock size={16} className="text-green-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>Smart Contracts:</strong> Automated rule enforcement and penalty assignment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded mr-2 mt-1">
                      <Database size={16} className="text-green-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>IPFS:</strong> Distributed storage for video evidence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded mr-2 mt-1">
                      <CircuitBoard size={16} className="text-green-700" />
                    </span>
                    <span className="text-gray-700">
                      <strong>Hyperledger:</strong> Alternative private blockchain implementation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[5] = el)}
          className="transition-all duration-700 opacity-0 translate-y-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies Used</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                <Code size={20} className="mr-2" />
                Programming & ML
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Python</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">OpenCV</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">TensorFlow</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">PyTorch</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                <Database size={20} className="mr-2" />
                Storage & Blockchain
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Ethereum</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Hyperledger Fabric</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">IPFS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">MySQL</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                <Network size={20} className="mr-2" />
                Integration & APIs
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Apache Kafka</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Flask</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">RESTful APIs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Web3.js</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};