// @sc-tsc-ignore-file

// /*
// React projects that don't include the DOM library need these interfaces to compile.
// React Native applications use React, but there is no DOM available. The JavaScript runtime
// is ES6/ES2015 only. These definitions allow such projects to compile with only `--lib ES6`.
// */

export interface AbstractCoreEvent { }
export interface AbstractCoreAnimationEvent extends Event { }
export interface AbstractCoreClipboardEvent extends Event { }
export interface AbstractCoreCompositionEvent extends Event { }
export interface AbstractCoreDragEvent extends Event { }
export interface AbstractCoreFocusEvent extends Event { }
export interface AbstractCoreKeyboardEvent extends Event { }
export interface AbstractCoreMouseEvent extends Event { }
export interface AbstractCoreTouchEvent extends Event { }
export interface AbstractCorePointerEvent extends Event { }
export interface AbstractCoreTransitionEvent extends Event { }
export interface AbstractCoreUIEvent extends Event { }
export interface AbstractCoreWheelEvent extends Event { }


import * as CSS from './cssDeclarations'

export interface EventTarget { }
export interface Document { }
export interface DataTransfer { }
export interface StyleMedia { }

export interface Element { }

// export interface HTMLElement extends Element { }
// export interface HTMLAnchorElement extends HTMLElement { }
// export interface HTMLAreaElement extends HTMLElement { }
// export interface HTMLAudioElement extends HTMLElement { }
// export interface HTMLBaseElement extends HTMLElement { }
// export interface HTMLBodyElement extends HTMLElement { }
// export interface HTMLBRElement extends HTMLElement { }
// export interface HTMLButtonElement extends HTMLElement { }
// export interface HTMLCanvasElement extends HTMLElement { }
// export interface HTMLDataListElement extends HTMLElement { }
// export interface HTMLDialogElement extends HTMLElement { }
// export interface HTMLDivElement extends HTMLElement { }
// export interface HTMLDListElement extends HTMLElement { }
// export interface HTMLEmbedElement extends HTMLElement { }
// export interface HTMLFieldSetElement extends HTMLElement { }
// export interface HTMLFormElement extends HTMLElement { }
// export interface HTMLHeadingElement extends HTMLElement { }
// export interface HTMLHeadElement extends HTMLElement { }
// export interface HTMLHRElement extends HTMLElement { }
// export interface HTMLHtmlElement extends HTMLElement { }
// export interface HTMLIFrameElement extends HTMLElement { }
// export interface HTMLImageElement extends HTMLElement { }
// export interface HTMLInputElement extends HTMLElement { }
// export interface HTMLModElement extends HTMLElement { }
// export interface HTMLLabelElement extends HTMLElement { }
// export interface HTMLLegendElement extends HTMLElement { }
// export interface HTMLLIElement extends HTMLElement { }
// export interface HTMLLinkElement extends HTMLElement { }
// export interface HTMLMapElement extends HTMLElement { }
// export interface HTMLMetaElement extends HTMLElement { }
// export interface HTMLObjectElement extends HTMLElement { }
// export interface HTMLOListElement extends HTMLElement { }
// export interface HTMLOptGroupElement extends HTMLElement { }
// export interface HTMLOptionElement extends HTMLElement { }
// export interface HTMLParagraphElement extends HTMLElement { }
// export interface HTMLParamElement extends HTMLElement { }
// export interface HTMLPreElement extends HTMLElement { }
// export interface HTMLProgressElement extends HTMLElement { }
// export interface HTMLQuoteElement extends HTMLElement { }
// export interface HTMLScriptElement extends HTMLElement { }
// export interface HTMLSelectElement extends HTMLElement { }
// export interface HTMLSourceElement extends HTMLElement { }
// export interface HTMLSpanElement extends HTMLElement { }
// export interface HTMLStyleElement extends HTMLElement { }
// export interface HTMLTableElement extends HTMLElement { }
// export interface HTMLTableColElement extends HTMLElement { }
// export interface HTMLTableDataCellElement extends HTMLElement { }
// export interface HTMLTableHeaderCellElement extends HTMLElement { }
// export interface HTMLTableRowElement extends HTMLElement { }
// export interface HTMLTableSectionElement extends HTMLElement { }
// export interface HTMLTextAreaElement extends HTMLElement { }
// export interface HTMLTitleElement extends HTMLElement { }
// export interface HTMLTrackElement extends HTMLElement { }
// export interface HTMLUListElement extends HTMLElement { }
// export interface HTMLVideoElement extends HTMLElement { }
export interface HTMLWebViewElement extends HTMLElement { }

// export interface SVGElement extends Element { }
// export interface SVGSVGElement extends SVGElement { }
// export interface SVGCircleElement extends SVGElement { }
// export interface SVGClipPathElement extends SVGElement { }
// export interface SVGDefsElement extends SVGElement { }
// export interface SVGDescElement extends SVGElement { }
// export interface SVGEllipseElement extends SVGElement { }
// export interface SVGFEBlendElement extends SVGElement { }
// export interface SVGFEColorMatrixElement extends SVGElement { }
// export interface SVGFEComponentTransferElement extends SVGElement { }
// export interface SVGFECompositeElement extends SVGElement { }
// export interface SVGFEConvolveMatrixElement extends SVGElement { }
// export interface SVGFEDiffuseLightingElement extends SVGElement { }
// export interface SVGFEDisplacementMapElement extends SVGElement { }
// export interface SVGFEDistantLightElement extends SVGElement { }
// export interface SVGFEFloodElement extends SVGElement { }
// export interface SVGFEFuncAElement extends SVGElement { }
// export interface SVGFEFuncBElement extends SVGElement { }
// export interface SVGFEFuncGElement extends SVGElement { }
// export interface SVGFEFuncRElement extends SVGElement { }
// export interface SVGFEGaussianBlurElement extends SVGElement { }
// export interface SVGFEImageElement extends SVGElement { }
// export interface SVGFEMergeElement extends SVGElement { }
// export interface SVGFEMergeNodeElement extends SVGElement { }
// export interface SVGFEMorphologyElement extends SVGElement { }
// export interface SVGFEOffsetElement extends SVGElement { }
// export interface SVGFEPointLightElement extends SVGElement { }
// export interface SVGFESpecularLightingElement extends SVGElement { }
// export interface SVGFESpotLightElement extends SVGElement { }
// export interface SVGFETileElement extends SVGElement { }
// export interface SVGFETurbulenceElement extends SVGElement { }
// export interface SVGFilterElement extends SVGElement { }
// export interface SVGForeignObjectElement extends SVGElement { }
// export interface SVGGElement extends SVGElement { }
// export interface SVGImageElement extends SVGElement { }
// export interface SVGLineElement extends SVGElement { }
// export interface SVGLinearGradientElement extends SVGElement { }
// export interface SVGMarkerElement extends SVGElement { }
// export interface SVGMaskElement extends SVGElement { }
// export interface SVGMetadataElement extends SVGElement { }
// export interface SVGPathElement extends SVGElement { }
// export interface SVGPatternElement extends SVGElement { }
// export interface SVGPolygonElement extends SVGElement { }
// export interface SVGPolylineElement extends SVGElement { }
// export interface SVGRadialGradientElement extends SVGElement { }
// export interface SVGRectElement extends SVGElement { }
// export interface SVGStopElement extends SVGElement { }
// export interface SVGSwitchElement extends SVGElement { }
// export interface SVGSymbolElement extends SVGElement { }
// export interface SVGTextElement extends SVGElement { }
// export interface SVGTextPathElement extends SVGElement { }
// export interface SVGTSpanElement extends SVGElement { }
// export interface SVGUseElement extends SVGElement { }
// export interface SVGViewElement extends SVGElement { }

export interface Text { }
export interface TouchList { }
export interface WebGLRenderingContext { }


// // Type definitions for React 16.7
// // Project: http://facebook.github.io/react/
// // Definitions by: Asana <https://asana.com>
// //                 AssureSign <http://www.assuresign.com>
// //                 Microsoft <https://microsoft.com>
// //                 John Reilly <https://github.com/johnnyreilly>
// //                 Benoit Benezech <https://github.com/bbenezech>
// //                 Patricio Zavolinsky <https://github.com/pzavolinsky>
// //                 Digiguru <https://github.com/digiguru>
// //                 Eric Anderson <https://github.com/ericanderson>
// //                 Tanguy Krotoff <https://github.com/tkrotoff>
// //                 Dovydas Navickas <https://github.com/DovydasNavickas>
// //                 Stéphane Goetz <https://github.com/onigoetz>
// //                 Josh Rutherford <https://github.com/theruther4d>
// //                 Guilherme Hübner <https://github.com/guilhermehubner>
// //                 Ferdy Budhidharma <https://github.com/ferdaber>
// //                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
// //                 Olivier Pascal <https://github.com/pascaloliv>
// //                 Martin Hochel <https://github.com/hotell>
// //                 Frank Li <https://github.com/franklixuefei>
// //                 Jessica Franco <https://github.com/Kovensky>
// //                 Paul Sherman <https://github.com/pshrmn>
// // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// // TypeScript Version: 2.8


// import * as CSS from 'csstype';
// import * as PropTypes from 'prop-types';

type NativeAnimationEvent = AbstractCoreAnimationEvent;
type NativeClipboardEvent = AbstractCoreClipboardEvent;
type NativeCompositionEvent = AbstractCoreCompositionEvent;
type NativeDragEvent = AbstractCoreDragEvent;
type NativeFocusEvent = AbstractCoreFocusEvent;
type NativeKeyboardEvent = AbstractCoreKeyboardEvent;
type NativeMouseEvent = AbstractCoreMouseEvent;
type NativeTouchEvent = AbstractCoreTouchEvent;
type NativePointerEvent = AbstractCorePointerEvent;
type NativeTransitionEvent = AbstractCoreTransitionEvent;
type NativeUIEvent = AbstractCoreUIEvent;
type NativeWheelEvent = AbstractCoreWheelEvent;

// // tslint:disable-next-line:export-just-namespace
// export = React;
// export as namespace React;

// declare namespace React {
//     //
//     // React Elements
//     // ----------------------------------------------------------------------

type ReactType<P = any> =
    {
        [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
    }[keyof JSX.IntrinsicElements] |
    ComponentType<P>;
type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

type Key = string | number;

export interface RefObject<T> {
    readonly current: T | null;
}

type Ref<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"] | RefObject<T> | null;
type LegacyRef<T> = string | Ref<T>;

type ComponentState = any;

export interface Attributes {
    key?: Key;
}
export interface RefAttributes<T> extends Attributes {
    ref?: Ref<T>;
}
export interface ClassAttributes<T> extends Attributes {
    ref?: LegacyRef<T>;
}

export interface ReactElement<P> {
    type: string | ComponentClass<P> | FunctionComponent<P>;
    props: P;
    key: Key | null;
}

//     /**
//      * @deprecated Please use `FunctionComponentElement`
//      */
//     type SFCElement<P> = FunctionComponentElement<P>;

export interface FunctionComponentElement<P> extends ReactElement<P> {
    type: FunctionComponent<P>;
    ref?: 'ref' extends keyof P ? P extends { ref?: infer R } ? R : never : never;
}

type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
export interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P> {
    type: ComponentClass<P>;
    ref?: LegacyRef<T>;
}

type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

// string fallback for custom web-components
export interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element> extends ReactElement<P> {
    type: string;
    ref: LegacyRef<T>;
}

// ReactHTML for ReactHTMLElement
// tslint:disable-next-line:no-empty-interface
export interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> { }

export interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
    type: keyof ReactHTML;
}

// ReactSVG for ReactSVGElement
export interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
    type: keyof ReactSVG;
}

export interface ReactPortal extends ReactElement<any> {
    key: Key | null;
    children: ReactNode;
}

//     //
//     // Factories
//     // ----------------------------------------------------------------------

type Factory<P> = (props?: Attributes & P, ...children: ReactNode[]) => ReactElement<P>;

//     /**
//      * @deprecated Please use `FunctionComponentFactory`
//      */
//     type SFCFactory<P> = FunctionComponentFactory<P>;

type FunctionComponentFactory<P> = (props?: Attributes & P, ...children: ReactNode[]) => FunctionComponentElement<P>;

type ComponentFactory<P, T extends Component<P, ComponentState>> =
    (props?: ClassAttributes<T> & P, ...children: ReactNode[]) => CElement<P, T>;

type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

type DOMFactory<P extends DOMAttributes<T>, T extends Element> =
    (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]) => DOMElement<P, T>;

// tslint:disable-next-line:no-empty-interface
export interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> { }

export interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
    (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
}

export interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
    (props?: ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null, ...children: ReactNode[]): ReactSVGElement;
}

//     //
//     // React Nodes
//     // http://facebook.github.io/react/docs/glossary.html
//     // ----------------------------------------------------------------------

type ReactText = string | number;
type ReactChild = ReactElement<any> | ReactText;

export interface ReactNodeArray extends Array<ReactNode> { }
type ReactFragment = {} | ReactNodeArray;
export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

//
// Top Level API
// ----------------------------------------------------------------------

// DOM Elements
// declare function createFactory<T extends HTMLElement>(
//     type: keyof ReactHTML): HTMLFactory<T>;
//     declare  function createFactory(
//     type: keyof ReactSVG): SVGFactory;
//     declare function createFactory<P extends DOMAttributes<T>, T extends Element>(
//     type: string): DOMFactory<P, T>;

//     // Custom components
//     function createFactory<P>(type: FunctionComponent<P>): FunctionComponentFactory<P>;
//     function createFactory<P>(
//         type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>): CFactory<P, ClassicComponent<P, ComponentState>>;
//     function createFactory<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
//         type: ClassType<P, T, C>): CFactory<P, T>;
//     function createFactory<P>(type: ComponentClass<P>): Factory<P>;

//     // DOM Elements
//     // TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
//     function createElement(
//         type: "input",
//         props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
//         ...children: ReactNode[]): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//     function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
//         type: keyof ReactHTML,
//         props?: ClassAttributes<T> & P | null,
//         ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
//     function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
//         type: keyof ReactSVG,
//         props?: ClassAttributes<T> & P | null,
//         ...children: ReactNode[]): ReactSVGElement;
//     function createElement<P extends DOMAttributes<T>, T extends Element>(
//         type: string,
//         props?: ClassAttributes<T> & P | null,
//         ...children: ReactNode[]): DOMElement<P, T>;

//     // Custom components

//     function createElement<P extends {}>(
//         type: FunctionComponent<P>,
//         props?: Attributes & P | null,
//         ...children: ReactNode[]): FunctionComponentElement<P>;
//     function createElement<P extends {}>(
//         type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
//         props?: ClassAttributes<ClassicComponent<P, ComponentState>> & P | null,
//         ...children: ReactNode[]): CElement<P, ClassicComponent<P, ComponentState>>;
//     function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
//         type: ClassType<P, T, C>,
//         props?: ClassAttributes<T> & P | null,
//         ...children: ReactNode[]): CElement<P, T>;
//     function createElement<P extends {}>(
//         type: FunctionComponent<P> | ComponentClass<P> | string,
//         props?: Attributes & P | null,
//         ...children: ReactNode[]): ReactElement<P>;

//     // DOM Elements
//     // ReactHTMLElement
//     function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
//         element: DetailedReactHTMLElement<P, T>,
//         props?: P,
//         ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
//     // ReactHTMLElement, less specific
//     function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
//         element: ReactHTMLElement<T>,
//         props?: P,
//         ...children: ReactNode[]): ReactHTMLElement<T>;
//     // SVGElement
//     function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
//         element: ReactSVGElement,
//         props?: P,
//         ...children: ReactNode[]): ReactSVGElement;
//     // DOM Element (has to be the last, because type checking stops at first overload that fits)
//     function cloneElement<P extends DOMAttributes<T>, T extends Element>(
//         element: DOMElement<P, T>,
//         props?: DOMAttributes<T> & P,
//         ...children: ReactNode[]): DOMElement<P, T>;

//     // Custom components
//     function cloneElement<P>(
//         element: FunctionComponentElement<P>,
//         props?: Partial<P> & Attributes,
//         ...children: ReactNode[]): FunctionComponentElement<P>;
//     function cloneElement<P, T extends Component<P, ComponentState>>(
//         element: CElement<P, T>,
//         props?: Partial<P> & ClassAttributes<T>,
//         ...children: ReactNode[]): CElement<P, T>;
//     function cloneElement<P>(
//         element: ReactElement<P>,
//         props?: Partial<P> & Attributes,
//         ...children: ReactNode[]): ReactElement<P>;

// Context via RenderProps
export interface ProviderProps<T> {
    value: T;
    children?: ReactNode;
}

export interface ConsumerProps<T> {
    children: (value: T) => ReactNode;
    unstable_observedBits?: number;
}

// TODO: similar to how Fragment is actually a symbol, the values returned from createContext,
// forwardRef and memo are actually objects that are treated specially by the renderer; see:
// https://github.com/facebook/react/blob/v16.6.0/packages/react/src/ReactContext.js#L35-L48
// https://github.com/facebook/react/blob/v16.6.0/packages/react/src/forwardRef.js#L42-L45
// https://github.com/facebook/react/blob/v16.6.0/packages/react/src/memo.js#L27-L31
// However, we have no way of telling the JSX parser that it's a JSX element type or its props other than
// by pretending to be a normal component.
//
// We don't just use ComponentType or SFC types because you are not supposed to attach statics to this
// object, but rather to the original function.
export interface ExoticComponent<P = {}> {
    /**
     * **NOTE**: Exotic components are not callable.
     */
    (props: P): (ReactElement<any> | null);
    readonly $$typeof: symbol;
}

export interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
    displayName?: string;
}

export interface ProviderExoticComponent<P> extends ExoticComponent<P> {
    propTypes?: WeakValidationMap<P>;
}

type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

// NOTE: only the Context object itself can get a displayName
// https://github.com/facebook/react-devtools/blob/e0b854e4c/backend/attachRendererFiber.js#L310-L325
type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
export interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    displayName?: string;
}
//     function createContext<T>(
//         defaultValue: T,
//         calculateChangedBits?: (prev: T, next: T) => number
//     ): Context<T>;

//     function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

//     const Children: ReactChildren;
//     const Fragment: ExoticComponent<{ children?: ReactNode }>;
//     const StrictMode: ExoticComponent<{ children?: ReactNode }>;

//     export interface SuspenseProps {
//         children?: ReactNode;

//         /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
//         fallback: NonNullable<ReactNode>|null;

//         // I tried looking at the code but I have no idea what it does.
//         // https://github.com/facebook/react/issues/13206#issuecomment-432489986
//         /**
//          * Not implemented yet, requires unstable_ConcurrentMode
//          */
//         // maxDuration?: number;
//     }
//     /**
//      * This feature is not yet available for server-side rendering.
//      * Suspense support will be added in a later release.
//      */
//     const Suspense: ExoticComponent<SuspenseProps>;
//     const version: string;

//     //
//     // Component API
//     // ----------------------------------------------------------------------

type ReactInstance = Component<any> | Element;

// Base component for plain JS classes
// tslint:disable-next-line:no-empty-interface
export interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
// class Component<P, S> {
//     // tslint won't let me format the sample code in a way that vscode likes it :(
//     /**
//      * If set, `this.context` will be set at runtime to the current value of the given Context.
//      *
//      * Usage:
//      *
//      * ```ts
//      * type MyContext = number
//      * const Ctx = React.createContext<MyContext>(0)
//      *
//      * class Foo extends React.Component {
//      *   static contextType = Ctx
//      *   context!: React.ContextType<typeof Ctx>
//      *   render () {
//      *     return <>My context's value: {this.context}</>;
//      *   }
//      * }
//      * ```
//      *
//      * @see https://reactjs.org/docs/context.html#classcontexttype
//      */
//     static contextType?: Context<any>;

//     /**
//      * If using the new style context, re-declare this in your class to be the
//      * `React.ContextType` of your `static contextType`.
//      *
//      * ```ts
//      * static contextType = MyContext
//      * context!: React.ContextType<typeof MyContext>
//      * ```
//      *
//      * @deprecated if used without a type annotation, or without static contextType
//      * @see https://reactjs.org/docs/legacy-context.html
//      */
//     // TODO (TypeScript 3.0): unknown
//     context: any;

//     constructor(props: Readonly<P>);
//     /**
//      * @deprecated
//      * @see https://reactjs.org/docs/legacy-context.html
//      */
//     constructor(props: P, context?: any);

//     // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
//     // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
//     // Also, the ` | S` allows intellisense to not be dumbisense
//     setState<K extends keyof S>(
//         state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
//         callback?: () => void
//     ): void;

//     forceUpdate(callBack?: () => void): void;
//     render(): ReactNode;

//     // React.Props<T> is now deprecated, which means that the `children`
//     // property is not available on `P` by default, even though you can
//     // always pass children as variadic arguments to `createElement`.
//     // In the future, if we can define its call signature conditionally
//     // on the existence of `children` in `P`, then we should remove this.
//     readonly props: Readonly<{ children?: ReactNode }> & Readonly<P>;
//     state: Readonly<S>;
//     /**
//      * @deprecated
//      * https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
//      */
//     refs: {
//         [key: string]: ReactInstance
//     };
// }

export interface PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> { }

export interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
    replaceState(nextState: S, callback?: () => void): void;
    isMounted(): boolean;
    getInitialState?(): S;
}

export interface ChildContextProvider<CC> {
    getChildContext(): CC;
}

//
// Class Interfaces
// ----------------------------------------------------------------------

/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 *
 * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 */
type SFC<P = {}> = FunctionComponent<P>;

/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 *
 * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 */
type StatelessComponent<P = {}> = FunctionComponent<P>;

type FC<P = {}> = FunctionComponent<P>;

export interface FunctionComponent<P = {}> {
    (props: P & { children?: ReactNode }, context?: any): ReactElement<any> | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}

//     export interface RefForwardingComponent<T, P = {}> {
//         (props: P & { children?: ReactNode }, ref: Ref<T> | null): ReactElement<any> | null;
//         propTypes?: WeakValidationMap<P>;
//         contextTypes?: ValidationMap<any>;
//         defaultProps?: Partial<P>;
//         displayName?: string;
//     }

export interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
    new(props: P, context?: any): Component<P, S>;
    propTypes?: WeakValidationMap<P>;
    contextType?: Context<any>;
    contextTypes?: ValidationMap<any>;
    childContextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}

//     export interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
//         new (props: P, context?: any): ClassicComponent<P, ComponentState>;
//         getDefaultProps?(): P;
//     }

//     /**
//      * We use an intersection type to infer multiple type parameters from
//      * a single argument, which is useful for many top-level API defs.
//      * See https://github.com/Microsoft/TypeScript/issues/7234 for more info.
//      */
//     type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> =
//         C &
//         (new (props: P, context?: any) => T);

//
// Component Specs and Lifecycle
// ----------------------------------------------------------------------

// This should actually be something like `Lifecycle<P, S> | DeprecatedLifecycle<P, S>`,
// as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
// methods are present.
export interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
    /**
     * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
     */
    componentDidMount?(): void;
    /**
     * Called to determine whether the change in props and state should trigger a re-render.
     *
     * `Component` always returns true.
     * `PureComponent` implements a shallow comparison on props and state and returns true if any
     * props or states have changed.
     *
     * If false is returned, `Component#render`, `componentWillUpdate`
     * and `componentDidUpdate` will not be called.
     */
    shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
    /**
     * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
     * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
     */
    componentWillUnmount?(): void;
    /**
     * Catches exceptions generated in descendant components. Unhandled exceptions will cause
     * the entire component tree to unmount.
     */
    componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
}

// Unfortunately, we have no way of declaring that the component constructor must implement this
export interface StaticLifecycle<P, S> {
    getDerivedStateFromProps?: GetDerivedStateFromProps<P, S>;
    getDerivedStateFromError?: GetDerivedStateFromError<P, S>;
}

type GetDerivedStateFromProps<P, S> =
    /**
     * Returns an update to a component's state based on its new props and old state.
     *
     * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
     */
    (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

type GetDerivedStateFromError<P, S> =
    /**
     * This lifecycle is invoked after an error has been thrown by a descendant component.
     * It receives the error that was thrown as a parameter and should return a value to update state.
     *
     * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
     */
    (error: any) => Partial<S> | null;

// This should be "infer SS" but can't use it yet
export interface NewLifecycle<P, S, SS> {
    /**
     * Runs before React applies the result of `render` to the document, and
     * returns an object to be given to componentDidUpdate. Useful for saving
     * things such as scroll position before `render` causes changes to it.
     *
     * Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
     * lifecycle events from running.
     */
    getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
    /**
     * Called immediately after updating occurs. Not called for the initial render.
     *
     * The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
     */
    componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
}

export interface DeprecatedLifecycle<P, S> {
    /**
     * Called immediately before mounting occurs, and before `Component#render`.
     * Avoid introducing any side-effects or subscriptions in this method.
     *
     * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
     * prevents this from being invoked.
     *
     * @deprecated 16.3, use componentDidMount or the constructor instead; will stop working in React 17
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
     */
    componentWillMount?(): void;
    /**
     * Called immediately before mounting occurs, and before `Component#render`.
     * Avoid introducing any side-effects or subscriptions in this method.
     *
     * This method will not stop working in React 17.
     *
     * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
     * prevents this from being invoked.
     *
     * @deprecated 16.3, use componentDidMount or the constructor instead
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
     */
    UNSAFE_componentWillMount?(): void;
    /**
     * Called when the component may be receiving new props.
     * React may call this even if props have not changed, so be sure to compare new and existing
     * props if you only want to handle changes.
     *
     * Calling `Component#setState` generally does not trigger this method.
     *
     * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
     * prevents this from being invoked.
     *
     * @deprecated 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
     */
    componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    /**
     * Called when the component may be receiving new props.
     * React may call this even if props have not changed, so be sure to compare new and existing
     * props if you only want to handle changes.
     *
     * Calling `Component#setState` generally does not trigger this method.
     *
     * This method will not stop working in React 17.
     *
     * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
     * prevents this from being invoked.
     *
     * @deprecated 16.3, use static getDerivedStateFromProps instead
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
     */
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    /**
     * Called immediately before rendering when new props or state is received. Not called for the initial render.
     *
     * Note: You cannot call `Component#setState` here.
     *
     * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
     * prevents this from being invoked.
     *
     * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
     */
    componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    /**
     * Called immediately before rendering when new props or state is received. Not called for the initial render.
     *
     * Note: You cannot call `Component#setState` here.
     *
     * This method will not stop working in React 17.
     *
     * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
     * prevents this from being invoked.
     *
     * @deprecated 16.3, use getSnapshotBeforeUpdate instead
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
     * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
     */
    UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
}

export interface Mixin<P, S> extends ComponentLifecycle<P, S> {
    mixins?: Array<Mixin<P, S>>;
    statics?: {
        [key: string]: any;
    };

    displayName?: string;
    propTypes?: ValidationMap<any>;
    contextTypes?: ValidationMap<any>;
    childContextTypes?: ValidationMap<any>;

    getDefaultProps?(): P;
    getInitialState?(): S;
}

export interface ComponentSpec<P, S> extends Mixin<P, S> {
    render(): ReactNode;

    [propertyName: string]: any;
}

// function createRef<T>(): RefObject<T>;

// will show `ForwardRef(${Component.displayName || Component.name})` in devtools by default,
// but can be given its own specific name
export interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
    defaultProps?: Partial<P>;
}

// function forwardRef<T, P = {}>(Component: RefForwardingComponent<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

/** Ensures that the props do not include ref at all */
type PropsWithoutRef<P> =
    // Just Pick would be sufficient for this, but I'm trying to avoid unnecessary mapping over union types
    // https://github.com/Microsoft/TypeScript/issues/28339
    'ref' extends keyof P
    ? Pick<P, Exclude<keyof P, 'ref'>>
    : P;
/** Ensures that the props do not include string ref, which cannot be forwarded */
type PropsWithRef<P> =
    // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
    'ref' extends keyof P
    ? P extends { ref?: infer R }
    ? string extends R
    ? PropsWithoutRef<P> & { ref?: Exclude<R, string> }
    : P
    : P
    : P;

/**
 * NOTE: prefer ComponentPropsWithRef, if the ref is forwarded,
 * or ComponentPropsWithoutRef when refs are not supported.
 */
type ComponentProps<T extends ReactType> =
    T extends ComponentType<infer P>
    ? P
    : T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : {};
type ComponentPropsWithRef<T extends ReactType> =
    T extends ComponentClass<infer P>
    ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
    : PropsWithRef<ComponentProps<T>>;
type ComponentPropsWithoutRef<T extends ReactType> =
    PropsWithoutRef<ComponentProps<T>>;

// will show `Memo(${Component.displayName || Component.name})` in devtools by default,
// but can be given its own specific name
export interface MemoExoticComponent<T extends ComponentType<any>> extends NamedExoticComponent<ComponentPropsWithRef<T>> {
    readonly type: T;
}

// function memo<P extends object>(
//     Component: SFC<P>,
//     propsAreEqual?: (prevProps: Readonly<P & { children?: ReactNode }>, nextProps: Readonly<P & { children?: ReactNode }>) => boolean
// ): NamedExoticComponent<P>;
// function memo<T extends ComponentType<any>>(
//     Component: T,
//     propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean
// ): MemoExoticComponent<T>;

export interface LazyExoticComponent<T extends ComponentType<any>> extends ExoticComponent<ComponentPropsWithRef<T>> {
    readonly _result: T;
}

// function lazy<T extends ComponentType<any>>(
//     factory: () => Promise<{ default: T }>
// ): LazyExoticComponent<T>;

//
// React Hooks
// ----------------------------------------------------------------------

// based on the code in https://github.com/facebook/react/pull/13968

// Unlike the class component setState, the updates are not allowed to be partial
type SetStateAction<S> = S | ((prevState: S) => S);
// this technically does accept a second argument, but it's already under a deprecation warning
// and it's not even released so probably better to not define it.
type Dispatch<A> = (value: A) => void;
// Unlike redux, the actions _can_ be anything
type Reducer<S, A> = (prevState: S, action: A) => S;
// The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
// TODO (TypeScript 3.0): ReadonlyArray<unknown>
type InputIdentityList = ReadonlyArray<any>;

// NOTE: Currently, in alpha.0, the effect callbacks are actually allowed to return anything,
// but functions are treated specially. The next version published with hooks will warn if you actually
// return anything besides `void` or a callback. Async effects need to call an async function inside
// them.
type EffectCallback = () => (void | (() => void));

export interface MutableRefObject<T> {
    current: T;
}

//     // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
//     /**
//      * Accepts a context object (the value returned from `React.createContext`) and returns the current
//      * context value, as given by the nearest context provider for the given context.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#usecontext
//      */
//     function useContext<T>(context: Context<T>/*, (not public API) observedBits?: number|boolean */): T;
//     /**
//      * Returns a stateful value, and a function to update it.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#usestate
//      */
//     function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
//     /**
//      * An alternative to `useState`.
//      *
//      * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
//      * multiple sub-values. It also lets you optimize performance for components that trigger deep
//      * updates because you can pass `dispatch` down instead of callbacks.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#usereducer
//      */
//     function useReducer<S, A>(reducer: Reducer<S, A>, initialState: S, initialAction?: A | null): [S, Dispatch<A>];
//     /**
//      * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
//      * (`initialValue`). The returned object will persist for the full lifetime of the component.
//      *
//      * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
//      * value around similar to how you’d use instance fields in classes.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#useref
//      */
//     // TODO (TypeScript 3.0): <T extends unknown>
//     function useRef<T>(initialValue: T): MutableRefObject<T>;
//     // convenience overload for refs given as a ref prop as they typically start with a null value
//     /**
//      * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
//      * (`initialValue`). The returned object will persist for the full lifetime of the component.
//      *
//      * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
//      * value around similar to how you’d use instance fields in classes.
//      *
//      * Usage note: if you need the result of useRef to be directly mutable, include `| null` in the type
//      * of the generic argument.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#useref
//      */
//     // TODO (TypeScript 3.0): <T extends unknown>
//     function useRef<T>(initialValue: T|null): RefObject<T>;
//     /**
//      * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
//      * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
//      * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
//      *
//      * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
//      *
//      * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
//      * `componentDidMount` and `componentDidUpdate`.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
//      */
//     function useLayoutEffect(effect: EffectCallback, inputs?: InputIdentityList): void;
//     /**
//      * Accepts a function that contains imperative, possibly effectful code.
//      *
//      * @param effect Imperative function that can return a cleanup function
//      * @param inputs If present, effect will only activate if the values in the list change.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#useeffect
//      */
//     function useEffect(effect: EffectCallback, inputs?: InputIdentityList): void;
//     // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
//     /**
//      * `useImperativeMethods` customizes the instance value that is exposed to parent components when using
//      * `ref`. As always, imperative code using refs should be avoided in most cases.
//      *
//      * `useImperativeMethods` should be used with `React.forwardRef`.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#useimperativemethods
//      */
//     function useImperativeMethods<T, R extends T>(ref: Ref<T>|undefined, init: () => R, inputs?: InputIdentityList): void;
//     // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
//     // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
//     /**
//      * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
//      * has changed.
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#usecallback
//      */
//     // TODO (TypeScript 3.0): <T extends (...args: never[]) => unknown>
//     function useCallback<T extends (...args: any[]) => any>(callback: T, inputs: InputIdentityList): T;
//     /**
//      * `useMemo` will only recompute the memoized value when one of the `inputs` has changed.
//      *
//      * Usage note: if calling `useMemo` with a referentially stable function, also give it as the input in
//      * the second argument.
//      *
//      * ```ts
//      * function expensive () { ... }
//      *
//      * function Component () {
//      *   const expensiveResult = useMemo(expensive, [expensive])
//      *   return ...
//      * }
//      * ```
//      *
//      * @version experimental
//      * @see https://reactjs.org/docs/hooks-reference.html#usememo
//      */
//     function useMemo<T>(factory: () => T, inputs: InputIdentityList): T;

//
// Event System
// ----------------------------------------------------------------------
// TODO: change any to unknown when moving to TS v3
export interface BaseSyntheticEvent<E = object, C = any, T = any> {
    nativeEvent: E;
    currentTarget: C;
    target: T;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
}

/**
 * currentTarget - a reference to the element on which the event listener is registered.
 *
 * target - a reference to the element from which the event was originally dispatched.
 * This might be a child element to the element on which the event listener is registered.
 * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
 */
export interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> { }

export interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
    clipboardData: DataTransfer;
}

export interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
    data: string;
}

export interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
    dataTransfer: DataTransfer;
}

export interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
    pointerId: number;
    pressure: number;
    tiltX: number;
    tiltY: number;
    width: number;
    height: number;
    pointerType: 'mouse' | 'pen' | 'touch';
    isPrimary: boolean;
}

export interface FocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
    relatedTarget: EventTarget;
    target: EventTarget & T;
}

// tslint:disable-next-line:no-empty-interface
export interface FormEvent<T = Element> extends SyntheticEvent<T> {
}

export interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}

export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}

export interface KeyboardEvent<T = Element> extends SyntheticEvent<T, NativeKeyboardEvent> {
    altKey: boolean;
    charCode: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    /**
     * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
     */
    key: string;
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    which: number;
}

export interface MouseEvent<T = Element, E = NativeMouseEvent> extends SyntheticEvent<T, E> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
}

export interface TouchEvent<T = Element> extends SyntheticEvent<T, NativeTouchEvent> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
}

export interface UIEvent<T = Element> extends SyntheticEvent<T, NativeUIEvent> {
    detail: number;
    view: AbstractView;
}

export interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
}

export interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
    animationName: string;
    elapsedTime: number;
    pseudoElement: string;
}

export interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
    elapsedTime: number;
    propertyName: string;
    pseudoElement: string;
}

//
// Event Handler Types
// ----------------------------------------------------------------------

type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

//
// Props / DOM Attributes
// ----------------------------------------------------------------------

/**
 * @deprecated. This was used to allow clients to pass `ref` and `key`
 * to `createElement`, which is no longer necessary due to intersection
 * types. If you need to declare a props object before passing it to
 * `createElement` or a factory, use `ClassAttributes<T>`:
 *
 * ```ts
 * var b: Button | null;
 * var props: ButtonProps & ClassAttributes<Button> = {
 *     ref: b => button = b, // ok!
 *     label: "I'm a Button"
 * };
 * ```
 */
export interface Props<T> {
    children?: ReactNode;
    key?: Key;
    ref?: LegacyRef<T>;
}

export interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
}

type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

export interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
}

export interface DOMAttributes<T> {
    children?: ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };

    // Clipboard Events
    onCopy?: ClipboardEventHandler<T>;
    onCopyCapture?: ClipboardEventHandler<T>;
    onCut?: ClipboardEventHandler<T>;
    onCutCapture?: ClipboardEventHandler<T>;
    onPaste?: ClipboardEventHandler<T>;
    onPasteCapture?: ClipboardEventHandler<T>;

    // Composition Events
    onCompositionEnd?: CompositionEventHandler<T>;
    onCompositionEndCapture?: CompositionEventHandler<T>;
    onCompositionStart?: CompositionEventHandler<T>;
    onCompositionStartCapture?: CompositionEventHandler<T>;
    onCompositionUpdate?: CompositionEventHandler<T>;
    onCompositionUpdateCapture?: CompositionEventHandler<T>;

    // Focus Events
    onFocus?: FocusEventHandler<T>;
    onFocusCapture?: FocusEventHandler<T>;
    onBlur?: FocusEventHandler<T>;
    onBlurCapture?: FocusEventHandler<T>;

    // Form Events
    onChange?: FormEventHandler<T>;
    onChangeCapture?: FormEventHandler<T>;
    onBeforeInput?: FormEventHandler<T>;
    onBeforeInputCapture?: FormEventHandler<T>;
    onInput?: FormEventHandler<T>;
    onInputCapture?: FormEventHandler<T>;
    onReset?: FormEventHandler<T>;
    onResetCapture?: FormEventHandler<T>;
    onSubmit?: FormEventHandler<T>;
    onSubmitCapture?: FormEventHandler<T>;
    onInvalid?: FormEventHandler<T>;
    onInvalidCapture?: FormEventHandler<T>;

    // Image Events
    onLoad?: ReactEventHandler<T>;
    onLoadCapture?: ReactEventHandler<T>;
    onError?: ReactEventHandler<T>; // also a Media Event
    onErrorCapture?: ReactEventHandler<T>; // also a Media Event

    // Keyboard Events
    onKeyDown?: KeyboardEventHandler<T>;
    onKeyDownCapture?: KeyboardEventHandler<T>;
    onKeyPress?: KeyboardEventHandler<T>;
    onKeyPressCapture?: KeyboardEventHandler<T>;
    onKeyUp?: KeyboardEventHandler<T>;
    onKeyUpCapture?: KeyboardEventHandler<T>;

    // Media Events
    onAbort?: ReactEventHandler<T>;
    onAbortCapture?: ReactEventHandler<T>;
    onCanPlay?: ReactEventHandler<T>;
    onCanPlayCapture?: ReactEventHandler<T>;
    onCanPlayThrough?: ReactEventHandler<T>;
    onCanPlayThroughCapture?: ReactEventHandler<T>;
    onDurationChange?: ReactEventHandler<T>;
    onDurationChangeCapture?: ReactEventHandler<T>;
    onEmptied?: ReactEventHandler<T>;
    onEmptiedCapture?: ReactEventHandler<T>;
    onEncrypted?: ReactEventHandler<T>;
    onEncryptedCapture?: ReactEventHandler<T>;
    onEnded?: ReactEventHandler<T>;
    onEndedCapture?: ReactEventHandler<T>;
    onLoadedData?: ReactEventHandler<T>;
    onLoadedDataCapture?: ReactEventHandler<T>;
    onLoadedMetadata?: ReactEventHandler<T>;
    onLoadedMetadataCapture?: ReactEventHandler<T>;
    onLoadStart?: ReactEventHandler<T>;
    onLoadStartCapture?: ReactEventHandler<T>;
    onPause?: ReactEventHandler<T>;
    onPauseCapture?: ReactEventHandler<T>;
    onPlay?: ReactEventHandler<T>;
    onPlayCapture?: ReactEventHandler<T>;
    onPlaying?: ReactEventHandler<T>;
    onPlayingCapture?: ReactEventHandler<T>;
    onProgress?: ReactEventHandler<T>;
    onProgressCapture?: ReactEventHandler<T>;
    onRateChange?: ReactEventHandler<T>;
    onRateChangeCapture?: ReactEventHandler<T>;
    onSeeked?: ReactEventHandler<T>;
    onSeekedCapture?: ReactEventHandler<T>;
    onSeeking?: ReactEventHandler<T>;
    onSeekingCapture?: ReactEventHandler<T>;
    onStalled?: ReactEventHandler<T>;
    onStalledCapture?: ReactEventHandler<T>;
    onSuspend?: ReactEventHandler<T>;
    onSuspendCapture?: ReactEventHandler<T>;
    onTimeUpdate?: ReactEventHandler<T>;
    onTimeUpdateCapture?: ReactEventHandler<T>;
    onVolumeChange?: ReactEventHandler<T>;
    onVolumeChangeCapture?: ReactEventHandler<T>;
    onWaiting?: ReactEventHandler<T>;
    onWaitingCapture?: ReactEventHandler<T>;

    // MouseEvents
    onClick?: MouseEventHandler<T>;
    onClickCapture?: MouseEventHandler<T>;
    onContextMenu?: MouseEventHandler<T>;
    onContextMenuCapture?: MouseEventHandler<T>;
    onDoubleClick?: MouseEventHandler<T>;
    onDoubleClickCapture?: MouseEventHandler<T>;
    onDrag?: DragEventHandler<T>;
    onDragCapture?: DragEventHandler<T>;
    onDragEnd?: DragEventHandler<T>;
    onDragEndCapture?: DragEventHandler<T>;
    onDragEnter?: DragEventHandler<T>;
    onDragEnterCapture?: DragEventHandler<T>;
    onDragExit?: DragEventHandler<T>;
    onDragExitCapture?: DragEventHandler<T>;
    onDragLeave?: DragEventHandler<T>;
    onDragLeaveCapture?: DragEventHandler<T>;
    onDragOver?: DragEventHandler<T>;
    onDragOverCapture?: DragEventHandler<T>;
    onDragStart?: DragEventHandler<T>;
    onDragStartCapture?: DragEventHandler<T>;
    onDrop?: DragEventHandler<T>;
    onDropCapture?: DragEventHandler<T>;
    onMouseDown?: MouseEventHandler<T>;
    onMouseDownCapture?: MouseEventHandler<T>;
    onMouseEnter?: MouseEventHandler<T>;
    onMouseLeave?: MouseEventHandler<T>;
    onMouseMove?: MouseEventHandler<T>;
    onMouseMoveCapture?: MouseEventHandler<T>;
    onMouseOut?: MouseEventHandler<T>;
    onMouseOutCapture?: MouseEventHandler<T>;
    onMouseOver?: MouseEventHandler<T>;
    onMouseOverCapture?: MouseEventHandler<T>;
    onMouseUp?: MouseEventHandler<T>;
    onMouseUpCapture?: MouseEventHandler<T>;

    // Selection Events
    onSelect?: ReactEventHandler<T>;
    onSelectCapture?: ReactEventHandler<T>;

    // Touch Events
    onTouchCancel?: TouchEventHandler<T>;
    onTouchCancelCapture?: TouchEventHandler<T>;
    onTouchEnd?: TouchEventHandler<T>;
    onTouchEndCapture?: TouchEventHandler<T>;
    onTouchMove?: TouchEventHandler<T>;
    onTouchMoveCapture?: TouchEventHandler<T>;
    onTouchStart?: TouchEventHandler<T>;
    onTouchStartCapture?: TouchEventHandler<T>;

    // Pointer Events
    onPointerDown?: PointerEventHandler<T>;
    onPointerDownCapture?: PointerEventHandler<T>;
    onPointerMove?: PointerEventHandler<T>;
    onPointerMoveCapture?: PointerEventHandler<T>;
    onPointerUp?: PointerEventHandler<T>;
    onPointerUpCapture?: PointerEventHandler<T>;
    onPointerCancel?: PointerEventHandler<T>;
    onPointerCancelCapture?: PointerEventHandler<T>;
    onPointerEnter?: PointerEventHandler<T>;
    onPointerEnterCapture?: PointerEventHandler<T>;
    onPointerLeave?: PointerEventHandler<T>;
    onPointerLeaveCapture?: PointerEventHandler<T>;
    onPointerOver?: PointerEventHandler<T>;
    onPointerOverCapture?: PointerEventHandler<T>;
    onPointerOut?: PointerEventHandler<T>;
    onPointerOutCapture?: PointerEventHandler<T>;
    onGotPointerCapture?: PointerEventHandler<T>;
    onGotPointerCaptureCapture?: PointerEventHandler<T>;
    onLostPointerCapture?: PointerEventHandler<T>;
    onLostPointerCaptureCapture?: PointerEventHandler<T>;

    // UI Events
    onScroll?: UIEventHandler<T>;
    onScrollCapture?: UIEventHandler<T>;

    // Wheel Events
    onWheel?: WheelEventHandler<T>;
    onWheelCapture?: WheelEventHandler<T>;

    // Animation Events
    onAnimationStart?: AnimationEventHandler<T>;
    onAnimationStartCapture?: AnimationEventHandler<T>;
    onAnimationEnd?: AnimationEventHandler<T>;
    onAnimationEndCapture?: AnimationEventHandler<T>;
    onAnimationIteration?: AnimationEventHandler<T>;
    onAnimationIterationCapture?: AnimationEventHandler<T>;

    // Transition Events
    onTransitionEnd?: TransitionEventHandler<T>;
    onTransitionEndCapture?: TransitionEventHandler<T>;
}


export interface CSSProperties extends CSS.Properties<string | number> {
    /**
     * The index signature was removed to enable closed typing for style
     * using CSSType. You're able to use type assertion or module augmentation
     * to add properties or an index signature of your own.
     *
     * For examples and more information, visit:
     * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
     */
}

export interface HTMLAttributes<T> extends DOMAttributes<T> {
    // React-specific Attributes
    defaultChecked?: boolean;
    defaultValue?: string | string[];
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;

    // Standard HTML Attributes
    accessKey?: string;
    className?: string;
    contentEditable?: boolean;
    contextMenu?: string;
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    id?: string;
    lang?: string;
    placeholder?: string;
    slot?: string;
    spellCheck?: boolean;
    style?: CSSProperties;
    tabIndex?: number;
    title?: string;

    // Unknown
    inputMode?: string;
    is?: string;
    radioGroup?: string; // <command>, <menuitem>

    // WAI-ARIA
    role?: string;

    // RDFa Attributes
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;

    // Non-standard Attributes
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: 'on' | 'off';
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface HTMLAttributes<T> extends DOMAttributes<T> {
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    'aria-activedescendant'?: string;
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
    'aria-atomic'?: boolean | 'false' | 'true';
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    'aria-busy'?: boolean | 'false' | 'true';
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see aria-pressed @see aria-selected.
     */
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see aria-colindex.
     */
    'aria-colcount'?: number;
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see aria-colcount @see aria-colspan.
     */
    'aria-colindex'?: number;
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-colindex @see aria-rowspan.
     */
    'aria-colspan'?: number;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see aria-owns.
     */
    'aria-controls'?: string;
    /** Indicates the element that represents the current item within a container or set of related elements. */
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
    /**
     * Identifies the element (or elements) that describes the object.
     * @see aria-labelledby
     */
    'aria-describedby'?: string;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see aria-describedby.
     */
    'aria-details'?: string;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see aria-hidden @see aria-readonly.
     */
    'aria-disabled'?: boolean | 'false' | 'true';
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
    /**
     * Identifies the element that provides an error message for the object.
     * @see aria-invalid @see aria-describedby.
     */
    'aria-errormessage'?: string;
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    'aria-expanded'?: boolean | 'false' | 'true';
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    'aria-flowto'?: string;
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    'aria-grabbed'?: boolean | 'false' | 'true';
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see aria-disabled.
     */
    'aria-hidden'?: boolean | 'false' | 'true';
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see aria-errormessage.
     */
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    'aria-keyshortcuts'?: string;
    /**
     * Defines a string value that labels the current element.
     * @see aria-labelledby.
     */
    'aria-label'?: string;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see aria-describedby.
     */
    'aria-labelledby'?: string;
    /** Defines the hierarchical level of an element within a structure. */
    'aria-level'?: number;
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    'aria-live'?: 'off' | 'assertive' | 'polite';
    /** Indicates whether an element is modal when displayed. */
    'aria-modal'?: boolean | 'false' | 'true';
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    'aria-multiline'?: boolean | 'false' | 'true';
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    'aria-multiselectable'?: boolean | 'false' | 'true';
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    'aria-orientation'?: 'horizontal' | 'vertical';
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see aria-controls.
     */
    'aria-owns'?: string;
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    'aria-placeholder'?: string;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-setsize.
     */
    'aria-posinset'?: number;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see aria-checked @see aria-selected.
     */
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see aria-disabled.
     */
    'aria-readonly'?: boolean | 'false' | 'true';
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see aria-atomic.
     */
    'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
    /** Indicates that user input is required on the element before a form may be submitted. */
    'aria-required'?: boolean | 'false' | 'true';
    /** Defines a human-readable, author-localized description for the role of an element. */
    'aria-roledescription'?: string;
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see aria-rowindex.
     */
    'aria-rowcount'?: number;
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see aria-rowcount @see aria-rowspan.
     */
    'aria-rowindex'?: number;
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-rowindex @see aria-colspan.
     */
    'aria-rowspan'?: number;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see aria-checked @see aria-pressed.
     */
    'aria-selected'?: boolean | 'false' | 'true';
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-posinset.
     */
    'aria-setsize'?: number;
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    /** Defines the maximum allowed value for a range widget. */
    'aria-valuemax'?: number;
    /** Defines the minimum allowed value for a range widget. */
    'aria-valuemin'?: number;
    /**
     * Defines the current value for a range widget.
     * @see aria-valuetext.
     */
    'aria-valuenow'?: number;
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    'aria-valuetext'?: string;
}

export interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
    // Standard HTML Attributes
    accept?: string;
    acceptCharset?: string;
    action?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    alt?: string;
    as?: string;
    async?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    autoPlay?: boolean;
    capture?: boolean | string;
    cellPadding?: number | string;
    cellSpacing?: number | string;
    charSet?: string;
    challenge?: string;
    checked?: boolean;
    cite?: string;
    classID?: string;
    cols?: number;
    colSpan?: number;
    content?: string;
    controls?: boolean;
    coords?: string;
    crossOrigin?: string;
    data?: string;
    dateTime?: string;
    default?: boolean;
    defer?: boolean;
    disabled?: boolean;
    download?: any;
    encType?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    frameBorder?: number | string;
    headers?: string;
    height?: number | string;
    high?: number;
    href?: string;
    hrefLang?: string;
    htmlFor?: string;
    httpEquiv?: string;
    integrity?: string;
    keyParams?: string;
    keyType?: string;
    kind?: string;
    label?: string;
    list?: string;
    loop?: boolean;
    low?: number;
    manifest?: string;
    marginHeight?: number;
    marginWidth?: number;
    max?: number | string;
    maxLength?: number;
    media?: string;
    mediaGroup?: string;
    method?: string;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    muted?: boolean;
    name?: string;
    nonce?: string;
    noValidate?: boolean;
    open?: boolean;
    optimum?: number;
    pattern?: string;
    placeholder?: string;
    playsInline?: boolean;
    poster?: string;
    preload?: string;
    readOnly?: boolean;
    rel?: string;
    required?: boolean;
    reversed?: boolean;
    rows?: number;
    rowSpan?: number;
    sandbox?: string;
    scope?: string;
    scoped?: boolean;
    scrolling?: string;
    seamless?: boolean;
    selected?: boolean;
    shape?: string;
    size?: number;
    sizes?: string;
    span?: number;
    src?: string;
    srcDoc?: string;
    srcLang?: string;
    srcSet?: string;
    start?: number;
    step?: number | string;
    summary?: string;
    target?: string;
    type?: string;
    useMap?: string;
    value?: string | string[] | number;
    width?: number | string;
    wmode?: string;
    wrap?: string;
}

export interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    target?: string;
    type?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> { }

export interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string;
    coords?: string;
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    shape?: string;
    target?: string;
}

export interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: string;
    target?: string;
}

export interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
}

export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: string;
    value?: string | string[] | number;
}

export interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: number | string;
    width?: number | string;
}

export interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number;
    width?: number | string;
}

export interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number;
}

export interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
    open?: boolean;
}

export interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
    dateTime?: string;
}

export interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
    open?: boolean;
}

export interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
}

export interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    form?: string;
    name?: string;
}

export interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptCharset?: string;
    action?: string;
    autoComplete?: string;
    encType?: string;
    method?: string;
    name?: string;
    noValidate?: boolean;
    target?: string;
}

export interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
    manifest?: string;
}

export interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allow?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    frameBorder?: number | string;
    height?: number | string;
    marginHeight?: number;
    marginWidth?: number;
    name?: string;
    sandbox?: string;
    scrolling?: string;
    seamless?: boolean;
    src?: string;
    srcDoc?: string;
    width?: number | string;
}

export interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string;
    crossOrigin?: "anonymous" | "use-credentials" | "";
    decoding?: "async" | "auto" | "sync";
    height?: number | string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    useMap?: string;
    width?: number | string;
}

export interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
    dateTime?: string;
}

export interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string;
    alt?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean;
    crossOrigin?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    type?: string;
    value?: string | string[] | number;
    width?: number | string;

    onChange?: ChangeEventHandler<T>;
}

export interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean;
    challenge?: string;
    disabled?: boolean;
    form?: string;
    keyType?: string;
    keyParams?: string;
    name?: string;
}

export interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    htmlFor?: string;
}

export interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | string[] | number;
}

export interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: string;
    crossOrigin?: string;
    href?: string;
    hrefLang?: string;
    integrity?: string;
    media?: string;
    rel?: string;
    sizes?: string;
    type?: string;
}

export interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string;
}

export interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: string;
}

export interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoPlay?: boolean;
    controls?: boolean;
    controlsList?: string;
    crossOrigin?: string;
    loop?: boolean;
    mediaGroup?: string;
    muted?: boolean;
    playsinline?: boolean;
    preload?: string;
    src?: string;
}

export interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charSet?: string;
    content?: string;
    httpEquiv?: string;
    name?: string;
}

export interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    high?: number;
    low?: number;
    max?: number | string;
    min?: number | string;
    optimum?: number;
    value?: string | string[] | number;
}

export interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
}

export interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
    classID?: string;
    data?: string;
    form?: string;
    height?: number | string;
    name?: string;
    type?: string;
    useMap?: string;
    width?: number | string;
    wmode?: string;
}

export interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    reversed?: boolean;
    start?: number;
    type?: '1' | 'a' | 'A' | 'i' | 'I';
}

export interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
}

export interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string | string[] | number;
}

export interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    htmlFor?: string;
    name?: string;
}

export interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string;
    value?: string | string[] | number;
}

export interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
    max?: number | string;
    value?: string | string[] | number;
}

export interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    async?: boolean;
    charSet?: string;
    crossOrigin?: string;
    defer?: boolean;
    integrity?: string;
    noModule?: boolean;
    nonce?: string;
    src?: string;
    type?: string;
}

export interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    value?: string | string[] | number;
    onChange?: ChangeEventHandler<T>;
}

export interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    type?: string;
}

export interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string;
    nonce?: string;
    scoped?: boolean;
    type?: string;
}

export interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
    cellPadding?: number | string;
    cellSpacing?: number | string;
    summary?: string;
}

export interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    cols?: number;
    dirName?: string;
    disabled?: boolean;
    form?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    value?: string | string[] | number;
    wrap?: string;

    onChange?: ChangeEventHandler<T>;
}

export interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
    align?: "left" | "center" | "right" | "justify" | "char";
    colSpan?: number;
    headers?: string;
    rowSpan?: number;
    scope?: string;
}

export interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
    align?: "left" | "center" | "right" | "justify" | "char";
    colSpan?: number;
    headers?: string;
    rowSpan?: number;
    scope?: string;
}

export interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
    dateTime?: string;
}

export interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
    default?: boolean;
    kind?: string;
    label?: string;
    src?: string;
    srcLang?: string;
}

export interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    height?: number | string;
    playsInline?: boolean;
    poster?: string;
    width?: number | string;
}

// this list is "complete" in that it contains every SVG attribute
// that React supports, but the types can be improved.
// Full list here: https://facebook.github.io/react/docs/dom-elements.html
//
// The three broad type categories are (in order of restrictiveness):
//   - "number | string"
//   - "string"
//   - union of string literals
export interface SVGAttributes<T> extends DOMAttributes<T> {
    // Attributes which also defined in HTMLAttributes
    // See comment in SVGDOMPropertyConfig.js
    className?: string;
    color?: string;
    height?: number | string;
    id?: string;
    lang?: string;
    max?: number | string;
    media?: string;
    method?: string;
    min?: number | string;
    name?: string;
    style?: CSSProperties;
    target?: string;
    type?: string;
    width?: number | string;

    // Other HTML properties supported by SVG elements in browsers
    role?: string;
    tabIndex?: number;

    // SVG Specific attributes
    accentHeight?: number | string;
    accumulate?: "none" | "sum";
    additive?: "replace" | "sum";
    alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
    "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
    allowReorder?: "no" | "yes";
    alphabetic?: number | string;
    amplitude?: number | string;
    arabicForm?: "initial" | "medial" | "terminal" | "isolated";
    ascent?: number | string;
    attributeName?: string;
    attributeType?: string;
    autoReverse?: number | string;
    azimuth?: number | string;
    baseFrequency?: number | string;
    baselineShift?: number | string;
    baseProfile?: number | string;
    bbox?: number | string;
    begin?: number | string;
    bias?: number | string;
    by?: number | string;
    calcMode?: number | string;
    capHeight?: number | string;
    clip?: number | string;
    clipPath?: string;
    clipPathUnits?: number | string;
    clipRule?: number | string;
    colorInterpolation?: number | string;
    colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit";
    colorProfile?: number | string;
    colorRendering?: number | string;
    contentScriptType?: number | string;
    contentStyleType?: number | string;
    cursor?: number | string;
    cx?: number | string;
    cy?: number | string;
    d?: string;
    decelerate?: number | string;
    descent?: number | string;
    diffuseConstant?: number | string;
    direction?: number | string;
    display?: number | string;
    divisor?: number | string;
    dominantBaseline?: number | string;
    dur?: number | string;
    dx?: number | string;
    dy?: number | string;
    edgeMode?: number | string;
    elevation?: number | string;
    enableBackground?: number | string;
    end?: number | string;
    exponent?: number | string;
    externalResourcesRequired?: number | string;
    fill?: string;
    fillOpacity?: number | string;
    fillRule?: "nonzero" | "evenodd" | "inherit";
    filter?: string;
    filterRes?: number | string;
    filterUnits?: number | string;
    floodColor?: number | string;
    floodOpacity?: number | string;
    focusable?: number | string;
    fontFamily?: string;
    fontSize?: number | string;
    fontSizeAdjust?: number | string;
    fontStretch?: number | string;
    fontStyle?: number | string;
    fontVariant?: number | string;
    fontWeight?: number | string;
    format?: number | string;
    from?: number | string;
    fx?: number | string;
    fy?: number | string;
    g1?: number | string;
    g2?: number | string;
    glyphName?: number | string;
    glyphOrientationHorizontal?: number | string;
    glyphOrientationVertical?: number | string;
    glyphRef?: number | string;
    gradientTransform?: string;
    gradientUnits?: string;
    hanging?: number | string;
    horizAdvX?: number | string;
    horizOriginX?: number | string;
    href?: string;
    ideographic?: number | string;
    imageRendering?: number | string;
    in2?: number | string;
    in?: string;
    intercept?: number | string;
    k1?: number | string;
    k2?: number | string;
    k3?: number | string;
    k4?: number | string;
    k?: number | string;
    kernelMatrix?: number | string;
    kernelUnitLength?: number | string;
    kerning?: number | string;
    keyPoints?: number | string;
    keySplines?: number | string;
    keyTimes?: number | string;
    lengthAdjust?: number | string;
    letterSpacing?: number | string;
    lightingColor?: number | string;
    limitingConeAngle?: number | string;
    local?: number | string;
    markerEnd?: string;
    markerHeight?: number | string;
    markerMid?: string;
    markerStart?: string;
    markerUnits?: number | string;
    markerWidth?: number | string;
    mask?: string;
    maskContentUnits?: number | string;
    maskUnits?: number | string;
    mathematical?: number | string;
    mode?: number | string;
    numOctaves?: number | string;
    offset?: number | string;
    opacity?: number | string;
    operator?: number | string;
    order?: number | string;
    orient?: number | string;
    orientation?: number | string;
    origin?: number | string;
    overflow?: number | string;
    overlinePosition?: number | string;
    overlineThickness?: number | string;
    paintOrder?: number | string;
    panose1?: number | string;
    pathLength?: number | string;
    patternContentUnits?: string;
    patternTransform?: number | string;
    patternUnits?: string;
    pointerEvents?: number | string;
    points?: string;
    pointsAtX?: number | string;
    pointsAtY?: number | string;
    pointsAtZ?: number | string;
    preserveAlpha?: number | string;
    preserveAspectRatio?: string;
    primitiveUnits?: number | string;
    r?: number | string;
    radius?: number | string;
    refX?: number | string;
    refY?: number | string;
    renderingIntent?: number | string;
    repeatCount?: number | string;
    repeatDur?: number | string;
    requiredExtensions?: number | string;
    requiredFeatures?: number | string;
    restart?: number | string;
    result?: string;
    rotate?: number | string;
    rx?: number | string;
    ry?: number | string;
    scale?: number | string;
    seed?: number | string;
    shapeRendering?: number | string;
    slope?: number | string;
    spacing?: number | string;
    specularConstant?: number | string;
    specularExponent?: number | string;
    speed?: number | string;
    spreadMethod?: string;
    startOffset?: number | string;
    stdDeviation?: number | string;
    stemh?: number | string;
    stemv?: number | string;
    stitchTiles?: number | string;
    stopColor?: string;
    stopOpacity?: number | string;
    strikethroughPosition?: number | string;
    strikethroughThickness?: number | string;
    string?: number | string;
    stroke?: string;
    strokeDasharray?: string | number;
    strokeDashoffset?: string | number;
    strokeLinecap?: "butt" | "round" | "square" | "inherit";
    strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
    strokeMiterlimit?: number | string;
    strokeOpacity?: number | string;
    strokeWidth?: number | string;
    surfaceScale?: number | string;
    systemLanguage?: number | string;
    tableValues?: number | string;
    targetX?: number | string;
    targetY?: number | string;
    textAnchor?: string;
    textDecoration?: number | string;
    textLength?: number | string;
    textRendering?: number | string;
    to?: number | string;
    transform?: string;
    u1?: number | string;
    u2?: number | string;
    underlinePosition?: number | string;
    underlineThickness?: number | string;
    unicode?: number | string;
    unicodeBidi?: number | string;
    unicodeRange?: number | string;
    unitsPerEm?: number | string;
    vAlphabetic?: number | string;
    values?: string;
    vectorEffect?: number | string;
    version?: string;
    vertAdvY?: number | string;
    vertOriginX?: number | string;
    vertOriginY?: number | string;
    vHanging?: number | string;
    vIdeographic?: number | string;
    viewBox?: string;
    viewTarget?: number | string;
    visibility?: number | string;
    vMathematical?: number | string;
    widths?: number | string;
    wordSpacing?: number | string;
    writingMode?: number | string;
    x1?: number | string;
    x2?: number | string;
    x?: number | string;
    xChannelSelector?: string;
    xHeight?: number | string;
    xlinkActuate?: string;
    xlinkArcrole?: string;
    xlinkHref?: string;
    xlinkRole?: string;
    xlinkShow?: string;
    xlinkTitle?: string;
    xlinkType?: string;
    xmlBase?: string;
    xmlLang?: string;
    xmlns?: string;
    xmlnsXlink?: string;
    xmlSpace?: string;
    y1?: number | string;
    y2?: number | string;
    y?: number | string;
    yChannelSelector?: string;
    z?: number | string;
    zoomAndPan?: string;
}

export interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
    allowFullScreen?: boolean;
    allowpopups?: boolean;
    autoFocus?: boolean;
    autosize?: boolean;
    blinkfeatures?: string;
    disableblinkfeatures?: string;
    disableguestresize?: boolean;
    disablewebsecurity?: boolean;
    guestinstance?: string;
    httpreferrer?: string;
    nodeintegration?: boolean;
    partition?: string;
    plugins?: boolean;
    preload?: string;
    src?: string;
    useragent?: string;
    webpreferences?: string;
}

//
// React.DOM
// ----------------------------------------------------------------------

export interface ReactHTML {
    a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
    article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
    b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
    bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
    body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
    br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
    button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
    caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    data: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
    dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    del: DetailedHTMLFactory<DelHTMLAttributes<HTMLElement>, HTMLElement>;
    details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
    dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
    div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
    dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
    fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
    figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
    header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
    html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
    i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
    img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
    kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
    label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
    li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
    main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
    mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
    menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
    meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLElement>, HTMLElement>;
    nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
    ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
    optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
    option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
    output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLElement>, HTMLElement>;
    p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
    picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
    progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
    q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
    rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
    section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
    small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
    span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
    sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
    tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
    textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
    thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLElement>, HTMLElement>;
    title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
    tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
    track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
    u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    "var": DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
    wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
}

export interface ReactSVG {
    animate: SVGFactory;
    circle: SVGFactory;
    clipPath: SVGFactory;
    defs: SVGFactory;
    desc: SVGFactory;
    ellipse: SVGFactory;
    feBlend: SVGFactory;
    feColorMatrix: SVGFactory;
    feComponentTransfer: SVGFactory;
    feComposite: SVGFactory;
    feConvolveMatrix: SVGFactory;
    feDiffuseLighting: SVGFactory;
    feDisplacementMap: SVGFactory;
    feDistantLight: SVGFactory;
    feDropShadow: SVGFactory;
    feFlood: SVGFactory;
    feFuncA: SVGFactory;
    feFuncB: SVGFactory;
    feFuncG: SVGFactory;
    feFuncR: SVGFactory;
    feGaussianBlur: SVGFactory;
    feImage: SVGFactory;
    feMerge: SVGFactory;
    feMergeNode: SVGFactory;
    feMorphology: SVGFactory;
    feOffset: SVGFactory;
    fePointLight: SVGFactory;
    feSpecularLighting: SVGFactory;
    feSpotLight: SVGFactory;
    feTile: SVGFactory;
    feTurbulence: SVGFactory;
    filter: SVGFactory;
    foreignObject: SVGFactory;
    g: SVGFactory;
    image: SVGFactory;
    line: SVGFactory;
    linearGradient: SVGFactory;
    marker: SVGFactory;
    mask: SVGFactory;
    metadata: SVGFactory;
    path: SVGFactory;
    pattern: SVGFactory;
    polygon: SVGFactory;
    polyline: SVGFactory;
    radialGradient: SVGFactory;
    rect: SVGFactory;
    stop: SVGFactory;
    svg: SVGFactory;
    switch: SVGFactory;
    symbol: SVGFactory;
    text: SVGFactory;
    textPath: SVGFactory;
    tspan: SVGFactory;
    use: SVGFactory;
    view: SVGFactory;
}

//     export interface ReactDOM extends ReactHTML, ReactSVG { }

//     //
//     // React.PropTypes
//     // ----------------------------------------------------------------------

// namespace PropTypes {
    type Validator<T=any> = any
    type Requireable<T=any> = any
    type ValidationMap<T=any> = any
// }
// type Validator<T> = PropTypes.Validator<T>;

// type Requireable<T> = PropTypes.Requireable<T>;

// type ValidationMap<T> = PropTypes.ValidationMap<T>;

type WeakValidationMap<T> = {
    [K in keyof T]?: null extends T[K]
    ? Validator<T[K] | null | undefined>
    : undefined extends T[K]
    ? Validator<T[K] | null | undefined>
    : Validator<T[K]>
};

//     export interface ReactPropTypes {
//         any: typeof PropTypes.any;
//         array: typeof PropTypes.array;
//         bool: typeof PropTypes.bool;
//         func: typeof PropTypes.func;
//         number: typeof PropTypes.number;
//         object: typeof PropTypes.object;
//         string: typeof PropTypes.string;
//         node: typeof PropTypes.node;
//         element: typeof PropTypes.element;
//         instanceOf: typeof PropTypes.instanceOf;
//         oneOf: typeof PropTypes.oneOf;
//         oneOfType: typeof PropTypes.oneOfType;
//         arrayOf: typeof PropTypes.arrayOf;
//         objectOf: typeof PropTypes.objectOf;
//         shape: typeof PropTypes.shape;
//         exact: typeof PropTypes.exact;
//     }

//     //
//     // React.Children
//     // ----------------------------------------------------------------------

//     export interface ReactChildren {
//         map<T, C extends ReactElement<any>>(children: C[], fn: (child: C, index: number) => T): T[];
//         map<T>(children: ReactNode, fn: (child: ReactChild, index: number) => T): T[];
//         forEach(children: ReactNode, fn: (child: ReactChild, index: number) => void): void;
//         count(children: ReactNode): number;
//         only(children: ReactNode): ReactElement<any>;
//         toArray(children: ReactNode): ReactChild[];
//     }

//     //
//     // Browser Interfaces
//     // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
//     // ----------------------------------------------------------------------

export interface AbstractView {
    styleMedia: StyleMedia;
    document: Document;
}

//     export interface Touch {
//         identifier: number;
//         target: EventTarget;
//         screenX: number;
//         screenY: number;
//         clientX: number;
//         clientY: number;
//         pageX: number;
//         pageY: number;
//     }

//     export interface TouchList {
//         [index: number]: Touch;
//         length: number;
//         item(index: number): Touch;
//         identifiedTouch(identifier: number): Touch;
//     }

//
// Error Interfaces
// ----------------------------------------------------------------------
export interface ErrorInfo {
    /**
     * Captures which component contained the exception, and its ancestors.
     */
    componentStack: string;
}
// }

// // Declared props take priority over inferred props
// // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
// type MergePropTypes<P, T> = P & Pick<T, Exclude<keyof T, keyof P>>;

// // Any prop that has a default prop becomes optional, but its type is unchanged
// // Undeclared default props are augmented into the resulting allowable attributes
// // If declared props have indexed properties, ignore default props entirely as keyof gets widened
// // Wrap in an outer-level conditional type to allow distribution over props that are unions
// type Defaultize<P, D> = P extends any
//     ? string extends keyof P ? P :
//         & Pick<P, Exclude<keyof P, keyof D>>
//         & Partial<Pick<P, Extract<keyof P, keyof D>>>
//         & Partial<Pick<D, Exclude<keyof D, keyof P>>>
//     : never;

// type ReactManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D; }
//     ? Defaultize<MergePropTypes<P, PropTypes.InferProps<T>>, D>
//     : C extends { propTypes: infer T; }
//         ? MergePropTypes<P, PropTypes.InferProps<T>>
//         : C extends { defaultProps: infer D; }
//             ? Defaultize<P, D>
//             : P;

declare global {
    namespace JSX {
        // tslint:disable-next-line:no-empty-interface
        export interface Element extends ReactElement<any> { }
        export interface ElementClass extends Component<any> {
            render(): ReactNode;
        }
        export interface ElementAttributesProperty { props: {}; }
        export interface ElementChildrenAttribute { children: {}; }

        // // We can't recurse forever because `type` can't be self-referential;
        // // let's assume it's reasonable to do a single lazy() around a single memo() / vice-versa
        // type LibraryManagedAttributes<C, P> = C extends MemoExoticComponent<infer T> | LazyExoticComponent<infer T>
        //     ? T extends MemoExoticComponent<infer U> | LazyExoticComponent<infer U>
        //         ? ReactManagedAttributes<U, P>
        //         : ReactManagedAttributes<T, P>
        //     : ReactManagedAttributes<C, P>;

        // tslint:disable-next-line:no-empty-interface
        export interface IntrinsicAttributes extends Attributes { }
        // tslint:disable-next-line:no-empty-interface
        export interface IntrinsicClassAttributes<T> extends ClassAttributes<T> { }

        export interface IntrinsicElements {
            // HTML
            a: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            address: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            area: DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            base: DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            big: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
            body: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            code: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            col: DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            datalist: DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            del: DetailedHTMLProps<DelHTMLAttributes<HTMLElement>, HTMLElement>;
            details: DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
            dfn: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            em: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            form: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: DetailedHTMLProps<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            map: DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: DetailedHTMLProps<MeterHTMLAttributes<HTMLElement>, HTMLElement>;
            nav: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            object: DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: DetailedHTMLProps<OutputHTMLAttributes<HTMLElement>, HTMLElement>;
            p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            s: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            script: DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            select: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            source: DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            style: DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            table: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            tbody: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement>;
            title: DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            video: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: SVGProps<SVGSVGElement>;

            animate: SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateTransform: SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: SVGProps<SVGCircleElement>;
            clipPath: SVGProps<SVGClipPathElement>;
            defs: SVGProps<SVGDefsElement>;
            desc: SVGProps<SVGDescElement>;
            ellipse: SVGProps<SVGEllipseElement>;
            feBlend: SVGProps<SVGFEBlendElement>;
            feColorMatrix: SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: SVGProps<SVGFEComponentTransferElement>;
            feComposite: SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: SVGProps<SVGFEDistantLightElement>;
            feFlood: SVGProps<SVGFEFloodElement>;
            feFuncA: SVGProps<SVGFEFuncAElement>;
            feFuncB: SVGProps<SVGFEFuncBElement>;
            feFuncG: SVGProps<SVGFEFuncGElement>;
            feFuncR: SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: SVGProps<SVGFEGaussianBlurElement>;
            feImage: SVGProps<SVGFEImageElement>;
            feMerge: SVGProps<SVGFEMergeElement>;
            feMergeNode: SVGProps<SVGFEMergeNodeElement>;
            feMorphology: SVGProps<SVGFEMorphologyElement>;
            feOffset: SVGProps<SVGFEOffsetElement>;
            fePointLight: SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: SVGProps<SVGFESpotLightElement>;
            feTile: SVGProps<SVGFETileElement>;
            feTurbulence: SVGProps<SVGFETurbulenceElement>;
            filter: SVGProps<SVGFilterElement>;
            foreignObject: SVGProps<SVGForeignObjectElement>;
            g: SVGProps<SVGGElement>;
            image: SVGProps<SVGImageElement>;
            line: SVGProps<SVGLineElement>;
            linearGradient: SVGProps<SVGLinearGradientElement>;
            marker: SVGProps<SVGMarkerElement>;
            mask: SVGProps<SVGMaskElement>;
            metadata: SVGProps<SVGMetadataElement>;
            path: SVGProps<SVGPathElement>;
            pattern: SVGProps<SVGPatternElement>;
            polygon: SVGProps<SVGPolygonElement>;
            polyline: SVGProps<SVGPolylineElement>;
            radialGradient: SVGProps<SVGRadialGradientElement>;
            rect: SVGProps<SVGRectElement>;
            stop: SVGProps<SVGStopElement>;
            switch: SVGProps<SVGSwitchElement>;
            symbol: SVGProps<SVGSymbolElement>;
            text: SVGProps<SVGTextElement>;
            textPath: SVGProps<SVGTextPathElement>;
            tspan: SVGProps<SVGTSpanElement>;
            use: SVGProps<SVGUseElement>;
            view: SVGProps<SVGViewElement>;
        }
    }
}
