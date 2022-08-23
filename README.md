Wykorzystamy metodę fabrykującą w Angularze, by dynamicznie tworzyć komponenty.
Dla uproszczenia użyjemy prostego komponentu-wiadomości, który przyjmuje w Input’cie typ wiadomości. Dodatkowo wykorzystamy tag <template> z Angulara, który można postrzegać jako miejsce, gdzie umieścimy nasze generowane komponenty.

W templatce głównego komponentu aplikacji, wykorzystamy symbo #, żeby uzyskać później w zmiennej referencję do naszego kontenera na wiadomości. Referencję uzyskujemy poprzez dekorator ViewChild(zwracający domyślnie instancje komponentu, bądź element DOM), ale w naszym wypadku chcemy uzyskać element w postaci ViewContainerRef(referencja do kontenera – template).

Teraz w naszym komponencie z wiadomościami dodajemy 2 przyciski, do dwóch wiadomości(success mesage, failure message). Następnie wstrzykujemy wkonstruktorze ComponentFactoryResolver – który dostarczy nam metodę resoveComponentFactory, która po przyjęciu komponentu zwróci nam ComponentFactory(możemy postrzegać to jako obiekt, który wie jak tworzyć komponent).

Teraz za każdym razem, gdy chcemy utworzyć komponent, musimy usunąć poprzedni widok(inaczej dodane zostanie do kontenera więcej widoków - w naszym wypadku jest to nieporządane zachowanie). Następnie metoda resolveComopnentFactory() przyjmuje komponent i zwraca nam instrukcje jak stworzyć komponent. Następnie wywołujemy createComponent z naszą instrukcją. Metoda ta wywoła wewnętrznie metodę create() z fabryki i doda komponent jako rodzeństwo naszego kontenera. Uzyskujemy tak referencję do naszego nowego komponentu i możemy przekazać mu typ.
