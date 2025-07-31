import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      category: "Primera Visita",
      questions: [
        {
          question: "¿Qué debo esperar en mi primera visita?",
          answer: `Tu primera visita incluye una consulta personalizada de 10-15 minutos donde discutiremos tu estilo preferido, tipo de cabello y rutina de cuidado.\n\nNuestro barbero experto te recomendará el corte y servicios más adecuados para tu rostro y estilo de vida.\n\nLa experiencia completa incluye corte, lavado, peinado y consejos de mantenimiento.`
        },
        {
          question: "¿Necesito traer algo especial?",
          answer: `No necesitas traer nada especial. Proporcionamos todas las herramientas profesionales, productos de alta calidad y toallas limpias.\n\nSi tienes productos específicos que prefieres, puedes traerlos, pero nuestros barberos trabajan con marcas premium seleccionadas.\n\nSolo necesitas llegar con 5-10 minutos de anticipación para el check-in.`
        }
      ]
    },
    {
      category: "Precios y Servicios",
      questions: [
        {
          question: "¿Cuáles son sus precios?",
          answer: `Nuestros precios varían según el servicio:\n\n• Corte Clásico: €25-35\n• Corte + Barba: €40-55\n• Servicio Completo VIP: €65-85\n• Tratamientos Especiales: €15-25\n\nTodos los precios incluyen consulta, lavado y peinado final. Ofrecemos paquetes con descuento para servicios combinados.`
        },
        {
          question: "¿Ofrecen servicios para eventos especiales?",
          answer: `Sí, ofrecemos servicios especiales para bodas, eventos corporativos y celebraciones:\n\n• Servicios a domicilio para grupos\n• Paquetes de novio y padrinos\n• Servicios VIP fuera del horario regular\n• Descuentos grupales (3+ personas)\n\nContacta con 48h de anticipación para disponibilidad y precios especiales.`
        }
      ]
    },
    {
      category: "Reservas y Cancelaciones",
      questions: [
        {
          question: "¿Cómo puedo cancelar o reprogramar mi cita?",
          answer: `Puedes cancelar o reprogramar tu cita de varias formas:\n\n• Online: A través de nuestro sistema de reservas 24/7\n• WhatsApp: +34 612 345 678\n• Teléfono: +34 912 345 678\n\nSolicita cambios con al menos 4 horas de anticipación para evitar cargos. Cancelaciones de último minuto pueden tener una tarifa de €10.`
        },
        {
          question: "¿Puedo reservar con un barbero específico?",
          answer: `Absolutamente. Nuestro sistema permite seleccionar tu barbero preferido durante la reserva.\n\nCada barbero tiene especialidades diferentes:\n• Miguel: Experto en cortes clásicos y barbas\n• Carlos: Especialista en estilos modernos\n• Antonio: Maestro en tratamientos tradicionales\n\nSi tu barbero preferido no está disponible, te sugeriremos alternativas similares.`
        }
      ]
    },
    {
      category: "Cuidado y Mantenimiento",
      questions: [
        {
          question: "¿Con qué frecuencia debo cortarme el cabello?",
          answer: `La frecuencia depende de tu tipo de cabello y estilo:\n\n• Cortes cortos/fade: Cada 2-3 semanas\n• Estilos medios: Cada 4-6 semanas\n• Cabello largo: Cada 6-8 semanas\n• Mantenimiento de barba: Cada 2-3 semanas\n\nTe daremos recomendaciones personalizadas basadas en tu crecimiento y estilo preferido.`
        },
        {
          question: "¿Qué productos recomiendan para el cuidado en casa?",
          answer: `Recomendamos productos según tu tipo de cabello:\n\n• Cabello graso: Champú clarificante, pomada mate\n• Cabello seco: Champú hidratante, aceites naturales\n• Cabello rizado: Cremas sin sulfatos, gel definidor\n\nVendemos productos profesionales en el estudio y ofrecemos asesoramiento personalizado gratuito.`
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemId = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems?.has(itemId)) {
      newOpenItems?.delete(itemId);
    } else {
      newOpenItems?.add(itemId);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las consultas más comunes sobre nuestros servicios, precios y políticas.
          </p>
        </div>

        <div className="space-y-8">
          {faqData?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-2xl p-6 card-elevated">
              <h3 className="font-headline text-xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Icon name="HelpCircle" size={20} color="var(--color-accent)" />
                </div>
                {category?.category}
              </h3>
              
              <div className="space-y-4">
                {category?.questions?.map((faq, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems?.has(itemId);
                  
                  return (
                    <div key={questionIndex} className="border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left bg-background hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-body font-medium text-foreground pr-4">
                          {faq?.question}
                        </span>
                        <Icon 
                          name={isOpen ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          color="var(--color-accent)"
                          className="flex-shrink-0 transition-transform duration-200"
                        />
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}>
                        <div className="px-6 pb-4 pt-2">
                          <div className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
                            {faq?.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
          <Icon name="MessageCircle" size={48} color="var(--color-accent)" className="mx-auto mb-4" />
          <h3 className="font-headline text-xl font-bold text-foreground mb-3">
            ¿Aún tienes dudas?
          </h3>
          <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
            Nuestro equipo está disponible para resolver cualquier consulta específica que tengas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/34612345678', '_blank')}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-body font-medium"
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              WhatsApp Directo
            </button>
            <button 
              onClick={() => window.open('tel:+34912345678', '_blank')}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200 font-body font-medium"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Llamar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;